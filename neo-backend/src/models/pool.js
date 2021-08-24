import { Pool } from 'pg';
import dotenv from 'dotenv';
import { connectionString } from '../setting';
dotenv.config();

export const pool = new Pool({ connectionString });