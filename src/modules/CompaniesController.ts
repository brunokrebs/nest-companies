import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import {CreateCompanyDTO} from './CreateCompanyDTO';

const companies = [];

@Controller('companies')
export class CompaniesController {
    @Get()
    findAll() {
        return companies;
    }

    @Post()
    createCompany(@Body() createCompanyDTO: CreateCompanyDTO) {
        console.log('here I\'m');
        console.log(createCompanyDTO);
        companies.push(createCompanyDTO);
    }
}