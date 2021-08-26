import dotenv from 'dotenv';
dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
export const neo4jUri = process.env.NEO4J_URI;
export const neo4jUser = process.env.NEO4J_USER;
export const neo4jPwd = process.env.NEO4J_PWD;
