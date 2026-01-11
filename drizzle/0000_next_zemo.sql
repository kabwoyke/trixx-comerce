CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(400) NOT NULL,
	"password" varchar(400) NOT NULL,
	"phone_number" varchar(400) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
