import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1544700704776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `movie` (`id` varchar(255) NOT NULL, `adult` varchar(255) NULL, `original_title` varchar(255) NULL, `overview` longtext NULL, `release_date` varchar(255) NULL, `vote_average` float NULL, `vote_count` float NULL, `popularity` int NULL, `status` varchar(255) NULL, `runtime` float NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL DEFAULT 'initialized', `lastName` varchar(255) NOT NULL DEFAULT 'initialized', `username` varchar(255) NOT NULL DEFAULT 'initialized', `password` varchar(255) NOT NULL DEFAULT 'initialized', `email` varchar(255) NOT NULL DEFAULT 'initialized', PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `movie`");
    }

}
