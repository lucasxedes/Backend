-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_unity_id_fkey";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_unity_id_fkey" FOREIGN KEY ("unity_id") REFERENCES "unity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
