import { Global, Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `config/${process.env.ENV || 'default'}.cfg`,
      expandVariables: true,
    })
  ],
  exports: [ConfigModule],
})
export class SharedModule {}
