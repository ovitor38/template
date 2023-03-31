import { User } from "@prisma/client";
import { userDto } from "./dto";
import { UserModel } from "./model/user.model";
import { CreateUser, GetUser } from "./use-cases";

export interface IUserService {
  create(requestUser: UserModel): Promise<any>;
  get(id: number): Promise<any>;
}
export class UserService implements IUserService {
  constructor(
    private readonly createUser: CreateUser,
    private readonly getUser: GetUser
  ) {}

  public async create(requestUser: UserModel): Promise<any> {
    return await this.createUser.execute(userDto.parse(requestUser));
  }

  public async get(id: number): Promise<any> {
    return await this.getUser.execute(id);
  }
}
