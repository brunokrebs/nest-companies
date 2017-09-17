import {NestFactory} from '@nestjs/core';
import * as bodyParser from 'body-parser';
import {ApplicationModule} from './modules/app.module';
import {ValidationPipe} from './modules/ValidationPipe';
import {HttpExceptionFilter} from './modules/HttpExceptionFilter';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.use(bodyParser.json());
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3000);
}

bootstrap();
