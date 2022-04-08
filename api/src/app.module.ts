import { Module } from '@nestjs/common';
import { DatabaseService } from './services/database/database.service';
import { UserController } from './user/user.controller';
import { RequestsController } from './requests/requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [

      ],
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      },
      logging: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true
    })
  ],
  controllers: [
    UserController,
    RequestsController
  ],
  providers: [
    DatabaseService
  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
