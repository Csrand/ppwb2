import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [UsersController],
  providers: [AppService],
})
export class AppModule {}
