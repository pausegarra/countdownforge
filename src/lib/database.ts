import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});

interface Args {
  query: string,
  values?: any[];
}

export default async function exec<T>({ query, values }: Args): Promise<T> {
  try {
    const results: T = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error } as any;
  }
}