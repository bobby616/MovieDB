import {MigrationInterface, QueryRunner} from "typeorm";

export class Yes1546518915393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `movie` CHANGE `adult` `adult` tinyint NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `original_title` `original_title` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `overview` `overview` longtext NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `release_date` `release_date` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_average` `vote_average` float NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_count` `vote_count` float NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `popularity` `popularity` float NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `genres` `genres` text NULL");
        await queryRunner.query("ALTER TABLE `series` CHANGE `original_name` `original_name` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `series` CHANGE `vote_average` `vote_average` float NULL");
        await queryRunner.query("ALTER TABLE `series` CHANGE `vote_count` `vote_count` float NULL");
        await queryRunner.query("ALTER TABLE `series` CHANGE `genres` `genres` text NULL");
        await queryRunner.query("ALTER TABLE `series` CHANGE `overview` `overview` longtext NULL");
        await queryRunner.query("ALTER TABLE `series` CHANGE `popularity` `popularity` float NULL");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `firstName` `firstName` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `nationality` `nationality` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `age` `age` float NULL");
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_368e146b785b574f42ae9e53d5e`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `roleId` `roleId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_368e146b785b574f42ae9e53d5e` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_368e146b785b574f42ae9e53d5e`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `roleId` `roleId` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_368e146b785b574f42ae9e53d5e` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `age` `age` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `nationality` `nationality` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `actors` CHANGE `firstName` `firstName` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `series` CHANGE `popularity` `popularity` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `series` CHANGE `overview` `overview` longtext NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `series` CHANGE `genres` `genres` text NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `series` CHANGE `vote_count` `vote_count` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `series` CHANGE `vote_average` `vote_average` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `series` CHANGE `original_name` `original_name` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `genres` `genres` text NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `popularity` `popularity` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_count` `vote_count` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_average` `vote_average` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `release_date` `release_date` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `overview` `overview` longtext NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `original_title` `original_title` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `adult` `adult` tinyint NULL DEFAULT 'NULL'");
    }

}
