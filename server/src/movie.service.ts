import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  root(): string {
    return 'NIki TURBOTO';
  }
}
