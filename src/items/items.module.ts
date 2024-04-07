import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

@Module({
  providers: [
      ItemsResolver
    , ItemsService
  ],
  imports:[
    TypeOrmModule.forFeature([Item]) // Esta configuración es para que se cargue ñla entidad a la base de datos
  ]
})
export class ItemsModule {}
