import { ISanitize } from '../util';
import { ProductDTO } from './dto/payment.dto';
import { IProduct } from './interface';

export class PaymentSanitizer {
  sanitizeProduct(user: IProduct): ProductDTO {
    const sanitizedProduct: ProductDTO = {
      id: user.id,
      active: user.active,
      name: user.name,
    };
    return sanitizedProduct;
  }

  sanitizeProductMany(products: IProduct[]): ProductDTO[] {
    const sanitizedProducts: ProductDTO[] = [];
    for (let i = 0; i < products.length; i++) {
      sanitizedProducts.push(this.sanitizeProduct(products[i]));
    }
    return sanitizedProducts;
  }
}
