import { IUserRepo } from "../../../repositorys/user-repository";

interface ICreateUserRequest {
  name: string;
  email: string;
}

export class CreateUser {
  private userRepo: IUserRepo;
  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async execute({ name, email }: ICreateUserRequest) {
    const user = await this.userRepo.create({ name, email });
    return [user, { success: true, errors: null }];
  }
}
