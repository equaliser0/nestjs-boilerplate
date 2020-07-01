import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "mongodb",
      url: "mongodb+srv://equaliser:RFZu7AO98tP9jW2r@nestjsrealworld-j72og.mongodb.net/test?retryWrites=true&w=majority",
      database: "test",
      entities: ["src/**/**.entity{.ts,.js}"],
      synchronize: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    // {
    //   name: 'default',
    //   type: 'postgres',
    //   host: process.env.DATABASE_HOST,
    //   port: Number(process.env.DATABASE_PORT),
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_DB,
    //   synchronize: true,
    //   dropSchema: true,
    //   logging: true,
    //   entities: ['dist/**/*.entity.js'],
    // };
  }
}
