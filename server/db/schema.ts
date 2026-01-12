import { sql , relations } from "drizzle-orm";
import { AnyPgColumn, decimal, integer, pgTable, real, text, uuid, varchar , primaryKey } from "drizzle-orm/pg-core";
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

export const productCategories = pgTable("product_categories" , {

  productId:uuid("product_id").references(() => products.id).notNull(),
  categoryId:uuid("category_id").references(() => categories.id)

}, (t) => [primaryKey({columns:[t.productId , t.categoryId]})])

export const productRelations = relations(products , ({many})=>({
  categories:many(productCategories)
}))

export const categoryRelations = relations(categories , ({many})=>({
  products:many(productCategories)
}))

export const productCategoryRelations = relations(productCategories , ({one}) => ({
  products:one(products , {
    fields:[productCategories.productId],
    references:[products.id]
  }),
  categories:one(categories , {
    fields:[productCategories.categoryId],
    references:[categories.id]
  })
}))