ALTER TABLE "categories" RENAME COLUMN "parent_category_id" TO "parent_id";--> statement-breakpoint
ALTER TABLE "categories" DROP CONSTRAINT "categories_parent_category_id_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;