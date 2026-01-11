import { sql } from "drizzle-orm";
import { AnyPgColumn, integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar({length:400}).notNull().unique(),
  password: varchar({length:400}).notNull(),
  phone_number: varchar({length:400}).notNull(),
});

export const categories = pgTable("categories" , {
  id:uuid("id").primaryKey().defaultRandom(),
  name:varchar("name", {length:255}).notNull(),
  parent_id:uuid("parent_id").references(():any => categories.id , {onDelete:"set null"})

})