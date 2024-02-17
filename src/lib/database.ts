import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: 3306,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

interface Args {
  query: string,
  values?: any[];
}

export default async function exec<T>({ query, values = [] }: Args): Promise<T> {
  try {
    const [results] = await pool.query(query, values);
    return results as T;
  } catch (error) {
    return { error } as any;
  }
}
