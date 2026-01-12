import { sql } from "drizzle-orm";
import { AnyPgColumn, decimal, integer, pgTable, real, text, uuid, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar({length:400}).notNull().unique(),
  password: varchar({length:400}).notNull(),
  phone_number: varchar({length:400}).notNull(),
});

export const categories = pgTable("categories" , {
  id:uuid("id").primaryKey().defaultRandom(),
  name:varchar("name", {length:255}).notNull(),
  parent_id:uuid("parent_id").references(():any => categories.id , {onDelete:"set null"}),
  image:varchar("image" , {length:1000})

})

export const products = pgTable("products" , {
  id:uuid("id").primaryKey().defaultRandom(),
  name:varchar("name", {length:255}).notNull(),
  description:text("description"),
  price:real("price").notNull(),
  discount_price:real("discount_price"),
  quantity:integer('quantity').notNull(),
  image:text("image")

})