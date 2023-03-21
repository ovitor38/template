import { userDto } from "./dto";
import { UserModel } from "./model/user.model";
import {
  CreateUser,
  deleteUser,
  getOneuser,
  getUsers,
  updateUser,
} from "./use-cases";

export class UserService {
  constructor(private readonly createUser: CreateUser) {}
  public async create(requestUser: UserModel) {
    return await this.createUser.execute(userDto.parse(requestUser));
  }
}
