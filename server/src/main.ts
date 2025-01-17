import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors()
	app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

	const config = new DocumentBuilder()
		.setTitle('Tunefit')
		.setDescription('The Tunefit API description')
		.setVersion('0.1')
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	await app.listen(3001)
}
bootstrap()
