import { pool } from '../index.js'

export async function createTables() {
    try {
        await pool.query(`
    CREATE TABLE IF NOT EXISTS resourses,
    topic TEXT IDENTITY PRIMARY KEY NOT NULL,
    id INT GENERATED ALWAYS,
    name TEXT NOT NULL,
    link TEXT NOT NULL
    `)
        console.log('resources table has been created successfully')
    } catch (error) {
        console.error('Error creating resourses, Error originated in createTables.js', error);
    }
}