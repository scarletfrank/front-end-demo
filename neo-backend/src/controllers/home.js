import { testEnvironmentVariable } from '../setting';

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });