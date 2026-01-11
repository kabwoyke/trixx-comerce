import { sql } from "drizzle-orm";
import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar({length:400}).notNull().unique(),
  password: varchar({length:400}).notNull(),
  phone_number: varchar({length:400}).notNull(),
});
