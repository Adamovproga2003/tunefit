import { Body, Controller, Post } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { SignUpDto } from './dto/signUp.dto'
import { AuthEntity } from './entities/auth.entity'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @Post('sign-up')
  @ApiOkResponse({ type: AuthEntity })
  signUp(@Body() {email, password, fullName}: SignUpDto) {
    return this.authService.signUp(email, password, fullName);
  }
}
