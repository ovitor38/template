// CreateUserService.ts
import { UserRepositoryInterface } from "../../../repositorys/user-repository";
import { UserModel } from "../model/user.model";

interface CreateUserRequest {
  name: string;
  email: string
}

export class CreateUser {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute({name, email}: CreateUserRequest) {
    const user = await this.userRepository.create({name, email});
    return [user, { success: true, errors: null }];
  }
}
