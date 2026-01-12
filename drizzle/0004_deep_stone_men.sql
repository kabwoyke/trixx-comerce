CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"price" numeric NOT NULL,
	"discount_price" numeric,
	"quantity" integer NOT NULL
);
