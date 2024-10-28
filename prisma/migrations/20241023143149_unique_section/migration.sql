/*
  Warnings:

  - A unique constraint covering the columns `[section]` on the table `Cms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Cms_section_key` ON `Cms`(`section`);
