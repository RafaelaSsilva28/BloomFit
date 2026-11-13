
import { getDatabase } from "./database";

export async function runDatabaseTest() {
    try {
        const database = await getDatabase();

        // Remove somente o registro de teste anterior,
        // evitando criar duplicatas a cada reinicialização.
        await database.runAsync(
            "DELETE FROM treinos WHERE nome = ?",
            ["Treino de teste BloomFit"]
        );

        // Cadastra um treino.
        const result = await database.runAsync(
            `INSERT INTO treinos (nome, descricao, categoria, tipo)
             VALUES (?, ?, ?, ?)`,
            [
                "Treino de teste BloomFit",
                "Primeiro cadastro realizado no SQLite.",
                "Inferiores",
                "personalizado",
            ]
        );

        // Consulta o treino cadastrado.
        const treino = await database.getFirstAsync(
            "SELECT * FROM treinos WHERE id = ?",
            [result.lastInsertRowId]
        );

        console.log("----- TESTE SQLITE BLOOMFIT -----");
        console.log("Treino cadastrado:", treino);
        console.log("Cadastro e consulta realizados com sucesso!");
        console.log("---------------------------------");

        return treino;
    } catch (error) {
        console.error("Erro no teste do SQLite:", error);
        throw error;
    }
}
