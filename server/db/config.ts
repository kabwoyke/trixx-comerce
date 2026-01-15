import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import * as schema from "./schema";

// You can specify any property from the postgres-js connection options
export const client = postgres(process.env.DATABASE_URL!, {

  ssl:false

});

export const db = drizzle(client , {
  schema
})

