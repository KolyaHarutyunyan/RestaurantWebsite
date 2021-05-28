import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseConnection } from './app.database';
// import { UserModule } from '../user/user.module';
// import { businessModule } from '../business/business.module';
// import { MenuModule } from '../menu/menu.module';
// import { CategoryModule } from '../category/category.module';
// import { MenuItemModule } from '../menu-item/menu-item.module';
import { OwnerModule } from '../owner';

@Module({
  imports: [
    AuthModule,
    OwnerModule,
    // UserModule,
    // businessModule,
    // MenuModule,
    // CategoryModule,
    // MenuItemModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseConnection],
})
export class AppModule {}
