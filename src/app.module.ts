import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { CawtController } from './cawt/cawt.controller';

@Module({
  imports: [DogsModule],
  controllers: [AppController, CawtController],
  providers: [AppService],
})
export class AppModule {}
