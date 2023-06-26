import { Pool, QueryConfig, QueryResult } from 'pg';

const PG_URI =
  'postgres://uhdiiqsa:xNkyBH72SHLdRZ0CkH8vYc9VvsYCP4Rf@rajje.db.elephantsql.com/uhdiiqsa';

const pool = new Pool({
  connectionString: PG_URI,
});

interface DatabaseQuery {
  query: (text: string, params?: any[]) => Promise<QueryResult<any>>;
}

const database: DatabaseQuery = {
  query: async (text, params) => {
    console.log('executed query', text);
    return await pool.query(text, params);
  },
};

export default database;
