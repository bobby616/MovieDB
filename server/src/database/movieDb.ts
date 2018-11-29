export class MovieDatabase{
    public database = [
        {
            adult: false,
            backdrop_path: '/5RVI8drhYMQsWNkAZ7ymdfqrazb.jpg',
            belongs_to_collection: null,
            budget: 0,
            genres: [
                {
                    id: 12,
                    name: 'Adventure',
                },
                {
                    id: 18,
                    name: 'Drama',
                },
                {
                    id: 14,
                    name: 'Fantasy',
                },
            ],
            homepage: null,
            id: 33821,
            imdb_id: 'tt1130992',
            original_language: 'en',
            original_title: 'Pinocchio',
            overview: 'The enchanted story of Pinocchio.',
            popularity: 2.636,
            poster_path: '/cfgex1EtQOtvBDJpUmGsXJJBuic.jpg',
            production_companies: [

            ],
            production_countries: [
                {
                    iso_3166_1: 'IT',
                    name: 'Italy',
                },
                {
                    iso_3166_1: 'GB',
                    name: 'United Kingdom',
                },
            ],
            release_date: '2008-12-14',
            revenue: 0,
            runtime: 179,
            spoken_languages: [
                {
                    iso_639_1: 'en',
                    name: 'English',
                },
            ],
            status: 'Released',
            tagline: '',
            title: 'Pinocchio',
            video: false,
            vote_average: 6.3,
            vote_count: 47,
        },
        {
            adult: false,
            // tslint:disable-next-line:quotemark
            backdrop_path: "/gTrvJ75ptGoTkUTp8TQx1pFs8p2.jpg",
            belongs_to_collection: null,
            budget: 0,
            genres: [
                {
                    id: 99,
                    name: 'Documentary',
                },
            ],
            homepage: 'http://www.paperclipsmovie.com/',
            id: 33823,
            imdb_id: 'tt0380615',
            original_language: 'en',
            original_title: 'Paper Clips',
            // tslint:disable-next-line:quotemark
            // tslint:disable-next-line:max-line-length
            overview: 'Whitwell, TN is a small, rural community of less than two thousand people nestled in the mountains of Tennessee. Its citizens are almost exclusively white and Christian. In 1998, the children of Whitwell Middle School took on an inspiring project, launched out of their principal\'s desire to help her students open their eyes to diversity in the world and the horrors and enormity of the holocaust.',
            popularity: 0.6,
            poster_path: '/t8vORhlCyMwC371yIFunrxpSryF.jpg',
            production_companies: [

            ],
            production_countries: [

            ],
            release_date: '2004-09-08',
            revenue: 0,
            runtime: 82,
            spoken_languages: [
                {
                    iso_639_1: 'en',
                    name: 'English',
                },
            ],
            status: 'Released',
            tagline: '',
            title: 'Paper Clips',
            video: false,
            vote_average: 6.6,
            vote_count: 6,
        },
        {
            adult: false,
            backdrop_path: '/gifEEfGfvULA3h8RsNf8Z8R5O1y.jpg',
            belongs_to_collection: null,
            budget: 0,
            genres: [

            ],
            homepage: null,
            id: 33825,
            imdb_id: '',
            original_language: 'en',
            original_title: 'Road Rage II - In Speed We Trust',
            overview: 'No overview found.',
            popularity: 0.6,
            poster_path: '/1lEQ4Elh9G0cVyobIhZK7LnYDNM.jpg',
            production_companies: [

            ],
            production_countries: [

            ],
            release_date: '2004-10-17',
            revenue: 0,
            runtime: 60,
            spoken_languages: [

            ],
            status: 'Released',
            tagline: '',
            title: 'Road Rage II - In Speed We Trust',
            video: false,
            vote_average: 0.0,
            vote_count: 0,
        },
    ];

 data(): object{
     return this.database;
 }
}