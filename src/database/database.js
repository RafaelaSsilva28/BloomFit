
import * as SQLite from "expo-sqlite";

// =====================================
// CONEXÃO ÚNICA COM O BANCO
// =====================================

let dbPromise = null;
let initializationPromise = null;

export function getDatabase() {
    if (!dbPromise) {
        dbPromise = SQLite.openDatabaseAsync("bloomfit.db").catch(
            (error) => {
                dbPromise = null;
                throw error;
            }
        );
    }

    return dbPromise;
}

// =====================================
// INICIALIZAÇÃO DO BANCO
// =====================================

export function initializeDatabase() {
    // Impede inicializações simultâneas
    if (initializationPromise) {
        return initializationPromise;
    }

    initializationPromise = (async () => {
        const database = await getDatabase();

        // Ativar chaves estrangeiras
        await database.execAsync("PRAGMA foreign_keys = ON;");

        // =====================================
        // CRIAÇÃO DAS TABELAS
        // =====================================

        await database.execAsync(`
            CREATE TABLE IF NOT EXISTS treinos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                descricao TEXT,
                categoria TEXT,
                tipo TEXT DEFAULT 'personalizado',
                criado_em TEXT DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS exercicios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                treino_id INTEGER,
                nome TEXT NOT NULL,
                series INTEGER,
                repeticoes INTEGER,
                carga REAL,
                descricao TEXT,
                descanso INTEGER DEFAULT 60,
                midia_uri TEXT,
                midia_tipo TEXT,

                FOREIGN KEY (treino_id)
                    REFERENCES treinos(id)
                    ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS treino_dias (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                treino_id INTEGER NOT NULL,
                dia_semana INTEGER NOT NULL
                    CHECK (dia_semana BETWEEN 0 AND 6),

                FOREIGN KEY (treino_id)
                    REFERENCES treinos(id)
                    ON DELETE CASCADE,

                UNIQUE (treino_id, dia_semana)
            );

            CREATE TABLE IF NOT EXISTS historico_treinos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                treino_id INTEGER,
                nome_treino TEXT,
                data TEXT NOT NULL,
                duracao INTEGER,
                observacoes TEXT,

                FOREIGN KEY (treino_id)
                    REFERENCES treinos(id)
                    ON DELETE SET NULL
            );

            CREATE TABLE IF NOT EXISTS historico_exercicios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                sessao_id INTEGER NOT NULL,
                exercicio_id INTEGER,
                nome_exercicio TEXT NOT NULL,
                series INTEGER,
                repeticoes INTEGER,
                carga REAL,
                midia_uri TEXT,
                midia_tipo TEXT,
                concluido INTEGER DEFAULT 0,

                FOREIGN KEY (sessao_id)
                    REFERENCES historico_treinos(id)
                    ON DELETE CASCADE,

                FOREIGN KEY (exercicio_id)
                    REFERENCES exercicios(id)
                    ON DELETE SET NULL
            );

            CREATE INDEX IF NOT EXISTS idx_exercicios_treino
            ON exercicios(treino_id);

            CREATE INDEX IF NOT EXISTS idx_treino_dias_dia
            ON treino_dias(dia_semana);

            CREATE INDEX IF NOT EXISTS idx_historico_data
            ON historico_treinos(data);

            CREATE INDEX IF NOT EXISTS idx_historico_exercicios_sessao
            ON historico_exercicios(sessao_id);
        `);

        // =====================================
        // MIGRAÇÕES
        // =====================================

        const exerciseColumns = await database.getAllAsync(
            "PRAGMA table_info(exercicios);"
        );

        const existingExerciseColumns = exerciseColumns.map(
            (column) => column.name
        );

        if (!existingExerciseColumns.includes("descanso")) {
            await database.execAsync(`
                ALTER TABLE exercicios
                ADD COLUMN descanso INTEGER DEFAULT 60;
            `);
        }

        if (!existingExerciseColumns.includes("midia_uri")) {
            await database.execAsync(`
                ALTER TABLE exercicios
                ADD COLUMN midia_uri TEXT;
            `);
        }

        if (!existingExerciseColumns.includes("midia_tipo")) {
            await database.execAsync(`
                ALTER TABLE exercicios
                ADD COLUMN midia_tipo TEXT;
            `);
        }

        const historyColumns = await database.getAllAsync(
            "PRAGMA table_info(historico_treinos);"
        );

        const existingHistoryColumns = historyColumns.map(
            (column) => column.name
        );

        if (!existingHistoryColumns.includes("nome_treino")) {
            await database.execAsync(`
                ALTER TABLE historico_treinos
                ADD COLUMN nome_treino TEXT;
            `);
        }

        // Preservar nomes dos treinos no histórico
        await database.execAsync(`
            UPDATE historico_treinos
            SET nome_treino = (
                SELECT treinos.nome
                FROM treinos
                WHERE treinos.id = historico_treinos.treino_id
            )
            WHERE nome_treino IS NULL
            AND treino_id IS NOT NULL;
        `);

        console.log("Banco de dados BloomFit inicializado!");

        return database;
    })().catch((error) => {
        // Permitir nova tentativa caso a inicialização falhe
        initializationPromise = null;
        throw error;
    });

    return initializationPromise;
}
