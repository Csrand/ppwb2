import { Module } from '@nestjs/common';
import { userModule } from './users/user.module';

@Module({
  imports: [userModule],
})
export class AppModule {}
