import { Module } from '@nestjs/common';
import { RequestsController } from './requests/requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './models/user';
import { Comment } from './models/comment';
import { ProductRequest } from './models/productRequest';
import { UsersModule } from './user/users.module';

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
        User
      ],
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      },
      logging: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true
    }),
    UsersModule
  ],
  controllers: [
    RequestsController
  ],
  providers: [

  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
