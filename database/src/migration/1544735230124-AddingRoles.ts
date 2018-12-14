import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingRoles1544735230124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL DEFAULT 'initialized', `lastName` varchar(255) NOT NULL DEFAULT 'initialized', `username` varchar(255) NOT NULL DEFAULT 'initialized', `password` varchar(255) NOT NULL DEFAULT 'initialized', `email` varchar(255) NOT NULL DEFAULT 'initialized', `role` varchar(255) NOT NULL DEFAULT 'User', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `adult` `adult` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `original_title` `original_title` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `overview` `overview` longtext NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `release_date` `release_date` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_average` `vote_average` float NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_count` `vote_count` float NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `popularity` `popularity` int NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `status` `status` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `runtime` `runtime` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `movie` CHANGE `runtime` `runtime` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `status` `status` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `popularity` `popularity` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_count` `vote_count` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `vote_average` `vote_average` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `release_date` `release_date` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `overview` `overview` longtext NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `original_title` `original_title` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `movie` CHANGE `adult` `adult` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("DROP TABLE `users`");
    }

}
