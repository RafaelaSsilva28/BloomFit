
import { getDatabase } from "./database";

// ========================================
// DIAS DA SEMANA
// ========================================

const DIAS_VALIDOS = [0, 1, 2, 3, 4, 5, 6];

function validarDiasSemana(dias) {
    if (!Array.isArray(dias)) {
        throw new Error("Os dias da semana devem ser informados em uma lista.");
    }

    const diasUnicos = [...new Set(dias)];

    const diasInvalidos = diasUnicos.some(
        dia => !DIAS_VALIDOS.includes(dia)
    );

    if (diasInvalidos) {
        throw new Error("Foi informado um dia da semana inválido.");
    }

    return diasUnicos;
}

// ========================================
// TREINOS PERSONALIZADOS
// ========================================

export async function getCustomWorkouts() {
    const database = await getDatabase();

    return await database.getAllAsync(`
        SELECT
            treinos.*,

            (
                SELECT COUNT(*)
                FROM exercicios
                WHERE exercicios.treino_id = treinos.id
            ) AS exercises,

            (
                SELECT GROUP_CONCAT(dia_semana)
                FROM treino_dias
                WHERE treino_dias.treino_id = treinos.id
                ORDER BY dia_semana
            ) AS dias_semana

        FROM treinos
        WHERE tipo = 'personalizado'
        ORDER BY id DESC;
    `);
}

export async function getWorkoutById(id) {
    const database = await getDatabase();

    return await database.getFirstAsync(`
        SELECT
            treinos.*,

            (
                SELECT GROUP_CONCAT(dia_semana)
                FROM treino_dias
                WHERE treino_dias.treino_id = treinos.id
                ORDER BY dia_semana
            ) AS dias_semana

        FROM treinos
        WHERE treinos.id = ?;
    `, [id]);
}

export async function createWorkout(workout) {
    const database = await getDatabase();

    const result = await database.runAsync(
        `INSERT INTO treinos (nome, descricao, categoria, tipo)
         VALUES (?, ?, ?, ?)`,
        [
            workout.nome,
            workout.descricao,
            workout.categoria,
            "personalizado",
        ]
    );

    const workoutId = result.lastInsertRowId;

    // Salvar os dias, caso tenham sido informados
    if (Array.isArray(workout.dias_semana)) {
        await setWorkoutDays(workoutId, workout.dias_semana);
    }

    return workoutId;
}

export async function updateWorkout(id, workout) {
    const database = await getDatabase();

    await database.runAsync(
        `UPDATE treinos
         SET nome = ?, descricao = ?, categoria = ?
         WHERE id = ? AND tipo = 'personalizado'`,
        [
            workout.nome,
            workout.descricao,
            workout.categoria,
            id,
        ]
    );

    // Atualizar os dias somente quando forem enviados
    if (Array.isArray(workout.dias_semana)) {
        await setWorkoutDays(id, workout.dias_semana);
    }
}

export async function deleteWorkout(id) {
    const database = await getDatabase();

    await database.runAsync(
        `DELETE FROM treinos
         WHERE id = ? AND tipo = 'personalizado'`,
        [id]
    );
}

// ========================================
// PROGRAMAÇÃO SEMANAL
// ========================================

// Associar vários dias ao mesmo treino
export async function setWorkoutDays(workoutId, days) {
    const database = await getDatabase();

    const diasUnicos = validarDiasSemana(days);

    await database.withTransactionAsync(async () => {
        await database.runAsync(
            "DELETE FROM treino_dias WHERE treino_id = ?",
            [workoutId]
        );

        for (const dia of diasUnicos) {
            await database.runAsync(
                `INSERT INTO treino_dias (treino_id, dia_semana)
                 VALUES (?, ?)`,
                [workoutId, dia]
            );
        }
    });
}

// Consultar os dias de um treino
export async function getWorkoutDays(workoutId) {
    const database = await getDatabase();

    const result = await database.getAllAsync(
        `SELECT dia_semana
         FROM treino_dias
         WHERE treino_id = ?
         ORDER BY dia_semana ASC`,
        [workoutId]
    );

    return result.map(item => item.dia_semana);
}

// Consultar os treinos programados para determinado dia
export async function getWorkoutsByDay(day) {
    const database = await getDatabase();

    if (!DIAS_VALIDOS.includes(day)) {
        throw new Error("Dia da semana inválido.");
    }

    return await database.getAllAsync(
        `SELECT
            treinos.*,

            (
                SELECT COUNT(*)
                FROM exercicios
                WHERE exercicios.treino_id = treinos.id
            ) AS exercises

         FROM treinos

         INNER JOIN treino_dias
            ON treino_dias.treino_id = treinos.id

         WHERE treino_dias.dia_semana = ?

         ORDER BY treinos.nome ASC`,
        [day]
    );
}

// ========================================
// EXERCÍCIOS
// ========================================

export async function getWorkoutExercises(workoutId) {
    const database = await getDatabase();

    return await database.getAllAsync(
        `SELECT *
         FROM exercicios
         WHERE treino_id = ?
         ORDER BY id ASC`,
        [workoutId]
    );
}

export async function createExercise(exercise) {
    const database = await getDatabase();

    const result = await database.runAsync(
        `INSERT INTO exercicios (
            treino_id,
            nome,
            series,
            repeticoes,
            carga,
            descricao,
            descanso,
            midia_uri,
            midia_tipo
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            exercise.treino_id,
            exercise.nome,
            exercise.series,
            exercise.repeticoes,
            exercise.carga,
            exercise.descricao,
            exercise.descanso ?? 60,
            exercise.midia_uri ?? null,
            exercise.midia_tipo ?? null,
        ]
    );

    return result.lastInsertRowId;
}

export async function updateExercise(id, exercise) {
    const database = await getDatabase();

    await database.runAsync(
        `UPDATE exercicios
         SET nome = ?,
             series = ?,
             repeticoes = ?,
             carga = ?,
             descricao = ?,
             descanso = ?,
             midia_uri = ?,
             midia_tipo = ?
         WHERE id = ?`,
        [
            exercise.nome,
            exercise.series,
            exercise.repeticoes,
            exercise.carga,
            exercise.descricao,
            exercise.descanso ?? 60,
            exercise.midia_uri ?? null,
            exercise.midia_tipo ?? null,
            id,
        ]
    );
}

export async function deleteExercise(id) {
    const database = await getDatabase();

    await database.runAsync(
        "DELETE FROM exercicios WHERE id = ?",
        [id]
    );
}
