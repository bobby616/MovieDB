import { Injectable } from '@nestjs/common';
import { SeriesDatabase } from '../database/seriesDB';

@Injectable()
export class SeriesService {
    constructor(private readonly seriesDB: SeriesDatabase) {

    }
    all(): object {
        return this.seriesDB.data();
    }
    rankingDesc(): object {
        return this.seriesDB.database.sort((series1, seires2) => seires2.vote_average - series1.vote_average);
    }
    rankingAsc(): object {
        return this.seriesDB.database.sort((series1, seires2) => series1.vote_average - seires2.vote_average);
    }
    popularityDesc(): object {
        return this.seriesDB.database.sort((series1, seires2) => seires2.popularity - series1.popularity);
    }
    popularityAsc(): object {
        return this.seriesDB.database.sort((series1, seires2) => series1.popularity - seires2.popularity);
    }

    nameAsc(): object {
        return this.seriesDB.database.sort((series1, seires2) => {
            if (series1.original_name > seires2.original_name) {
                return -1;
            }
            if (series1.original_name < seires2.original_name) {
                return 1;
            }
            return 0;
        });
    }
}
