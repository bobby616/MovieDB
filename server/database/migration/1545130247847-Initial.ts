import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1545130247847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `movie` (`id` varchar(255) NOT NULL, `adult` tinyint NULL, `original_title` varchar(255) NULL, `overview` longtext NULL, `release_date` varchar(255) NULL, `vote_average` float NULL, `vote_count` float NULL, `popularity` float NULL, `genres` text NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `series` (`id` varchar(255) NOT NULL, `original_name` varchar(255) NULL, `vote_average` float NULL, `vote_count` float NULL, `genres` text NULL, `overview` longtext NULL, `popularity` float NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `actors` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NULL, `lastName` varchar(255) NOT NULL DEFAULT 'initialized', `nationality` varchar(255) NULL, `age` float NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL DEFAULT 'initialized', `lastName` varchar(255) NOT NULL DEFAULT 'initialized', `username` varchar(255) NOT NULL DEFAULT 'initialized', `password` varchar(255) NOT NULL DEFAULT 'initialized', `email` varchar(255) NOT NULL DEFAULT 'initialized', `role` varchar(255) NOT NULL DEFAULT 'User', `rolesId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `roles` (`id` varchar(255) NOT NULL, `role` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `actors_movies_movie` (`actorsId` varchar(255) NOT NULL, `movieId` varchar(255) NOT NULL, PRIMARY KEY (`actorsId`, `movieId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `actors_series_series` (`actorsId` varchar(255) NOT NULL, `seriesId` varchar(255) NOT NULL, PRIMARY KEY (`actorsId`, `seriesId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_30cd0bbcd1dcae7673af7888eb8` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`)");
        await queryRunner.query("ALTER TABLE `actors_movies_movie` ADD CONSTRAINT `FK_4396a0502665f518dbab113d2af` FOREIGN KEY (`actorsId`) REFERENCES `actors`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `actors_movies_movie` ADD CONSTRAINT `FK_517c1f065a6a362eca4c5833244` FOREIGN KEY (`movieId`) REFERENCES `movie`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `actors_series_series` ADD CONSTRAINT `FK_095d268993305200ac2f3832be4` FOREIGN KEY (`actorsId`) REFERENCES `actors`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `actors_series_series` ADD CONSTRAINT `FK_5100460886f6089c9b411bc906a` FOREIGN KEY (`seriesId`) REFERENCES `series`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `actors_series_series` DROP FOREIGN KEY `FK_5100460886f6089c9b411bc906a`");
        await queryRunner.query("ALTER TABLE `actors_series_series` DROP FOREIGN KEY `FK_095d268993305200ac2f3832be4`");
        await queryRunner.query("ALTER TABLE `actors_movies_movie` DROP FOREIGN KEY `FK_517c1f065a6a362eca4c5833244`");
        await queryRunner.query("ALTER TABLE `actors_movies_movie` DROP FOREIGN KEY `FK_4396a0502665f518dbab113d2af`");
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_30cd0bbcd1dcae7673af7888eb8`");
        await queryRunner.query("DROP TABLE `actors_series_series`");
        await queryRunner.query("DROP TABLE `actors_movies_movie`");
        await queryRunner.query("DROP TABLE `roles`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `actors`");
        await queryRunner.query("DROP TABLE `series`");
        await queryRunner.query("DROP TABLE `movie`");
    }

}
