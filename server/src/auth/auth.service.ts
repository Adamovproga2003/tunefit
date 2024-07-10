import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { UsersService } from 'src/users/users.service'
import { PrismaService } from './../prisma/prisma.service'
import { AuthEntity } from './entities/auth.entity'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService, private usersService: UsersService) {}


  async login(email: string, password: string): Promise<AuthEntity> {
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }


    const isPasswordValid = await bcrypt.compare(password, user.password);


    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }


    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }

  async signUp(email: string, password: string, fullName: string): Promise<AuthEntity> {

    const user = await this.prisma.user.findUnique({ where: { email: email } });

    // If no user is found, throw an error
    if (user) {
      throw new ConflictException('User already exists');
    }

    const newUser = await this.usersService.create({
      email,
      password,
      fullName
    })

    return {
      accessToken: this.jwtService.sign({ userId: newUser.id }),
    };
  }
}
