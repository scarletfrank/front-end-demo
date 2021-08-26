import dotenv from 'dotenv';
import neo4j from 'neo4j-driver';
import {neo4jUri, neo4jUser, neo4jPwd} from '../setting';

dotenv.config();

export const driver = neo4j.driver(neo4jUri, neo4j.auth.basic(neo4jUser, neo4jPwd));