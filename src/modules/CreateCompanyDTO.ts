import {Length} from 'class-validator';

export class CreateCompanyDTO {
    @Length(5, 50)
    readonly companyName: string;
    @Length(5, 50)
    readonly tradingName: string;
    @Length(5, 50)
    readonly website: string;
    @Length(5, 12)
    readonly zipAddress: string;
    @Length(5, 50)
    readonly streetAddress: string;
    @Length(1, 50)
    readonly streetNumber: string;
    @Length(3, 50)
    readonly city: string;
}