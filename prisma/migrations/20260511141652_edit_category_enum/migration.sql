/*
  Warnings:

  - The values [WEB,DESIGN] on the enum `ProjectCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectCategory_new" AS ENUM ('Web', 'Design');
ALTER TABLE "public"."Project" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Project" ALTER COLUMN "category" TYPE "ProjectCategory_new" USING ("category"::text::"ProjectCategory_new");
ALTER TYPE "ProjectCategory" RENAME TO "ProjectCategory_old";
ALTER TYPE "ProjectCategory_new" RENAME TO "ProjectCategory";
DROP TYPE "public"."ProjectCategory_old";
ALTER TABLE "Project" ALTER COLUMN "category" SET DEFAULT 'Web';
COMMIT;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "category" SET DEFAULT 'Web';
