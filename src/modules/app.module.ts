import {Module} from '@nestjs/common';
import {CompaniesController} from './CompaniesController';

@Module({
    modules: [],
    controllers: [CompaniesController],
})
export class ApplicationModule {
}