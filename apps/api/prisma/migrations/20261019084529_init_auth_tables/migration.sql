-- CreateEnum
CREATE TYPE "RoleCode" AS ENUM ('MAHASISWA', 'DOSEN', 'ADMIN', 'SUPERADMIN');

-- CreateTable
CREATE TABLE "auth_users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "auth_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_roles" (
    "id" UUID NOT NULL,
    "code" "RoleCode" NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auth_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_user_details" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "identifier" VARCHAR(50) NOT NULL,
    "full_name" VARCHAR(150) NOT NULL,
    "faculty" VARCHAR(100),
    "study_program" VARCHAR(100),
    "cohort" VARCHAR(4),
    "gpa" DECIMAL(3,2),
    "total_credits" INTEGER DEFAULT 0,
    "advisor_id" UUID,
    "title" VARCHAR(100),
    "avatar_url" VARCHAR(255),
    "phone_number" VARCHAR(20),
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "auth_user_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_user_sessions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "refresh_token_hash" VARCHAR(255) NOT NULL,
    "user_agent" TEXT,
    "ip_address" VARCHAR(45),
    "is_revoked" BOOLEAN NOT NULL DEFAULT false,
    "expires_at" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auth_user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_users_email_key" ON "auth_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "auth_roles_code_key" ON "auth_roles"("code");

-- CreateIndex
CREATE UNIQUE INDEX "auth_user_details_user_id_key" ON "auth_user_details"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "auth_user_details_identifier_key" ON "auth_user_details"("identifier");

-- AddForeignKey
ALTER TABLE "auth_user_details" ADD CONSTRAINT "auth_user_details_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_user_details" ADD CONSTRAINT "auth_user_details_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "auth_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_user_details" ADD CONSTRAINT "auth_user_details_advisor_id_fkey" FOREIGN KEY ("advisor_id") REFERENCES "auth_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_user_sessions" ADD CONSTRAINT "auth_user_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
