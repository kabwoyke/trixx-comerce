CREATE TABLE "exa" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "exa_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"age" integer NOT NULL,
	"email" varchar NOT NULL,
	CONSTRAINT "exa_email_unique" UNIQUE("email")
);
