import { Injectable } from '@nestjs/common';
import { AddressDTO } from '../dto';
import { IAddress } from '../interface';

@Injectable()
export class AddressSanitizer {
  sanitize(address: IAddress): AddressDTO {
    const sanitizedAddress: AddressDTO = {
      lat: address.lat,
      lng: address.lng,
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: address.country,
      formattedAddress: address.formattedAddress,
    };
    return sanitizedAddress;
  }
}
