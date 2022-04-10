import { Module } from '@nestjs/common';
import { RequestsController } from './requests/requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.entity';
import { ProductRequest } from './requests/request.entity';
import { UsersModule } from './user/users.module';
import { RequestsModule } from './requests/requests.module';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/comment.entity';

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
        User,
        ProductRequest,
        Comment
      ],
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      },
      logging: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true
    }),
    UsersModule,
    RequestsModule,
    CommentsModule
  ],
  controllers: [

  ],
  providers: [

  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
