import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../util/decorators';
import { IAddress } from '.';
import { AddressService } from './address.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('address')
@ApiTags('Address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  // /** Converts the address to a geocoded full address */
  // @Post()
  // @Public()
  // async convertAddress(@Body('address') address: string): Promise<IAddress> {
  //   const x = await this.addressService.getAddress(address);
  //   return x;
  // }
}
