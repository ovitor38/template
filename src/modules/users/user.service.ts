import { BadRequestError } from "../../helpers/api-errors";
import { PARAM_TYPE_ERROR } from "../../helpers/constants/http-codes";
import { userDto, userUpdateDto } from "./dto";
import { UserModel, UserUpadateModel } from "./model/user.model";
import {
  createUser,
  deleteUser,
  getOneuser,
  getUsers,
  updateUser,
} from "./use-cases";

class UserService {
  public async createService(requestUser: UserModel) {
    return await createUser.run(userDto.parse(requestUser));
  }

  public async getOneService(id: number) {
    return await getOneuser.run(id);
  }

  public async getUsers() {
    return await getUsers.run();
  }

  public async deleteUserService(id: number) {
    return await deleteUser.run(Number(id));
  }

  public async updateuserService(requestUser: UserUpadateModel) {
    return await updateUser.run(userUpdateDto.parse(requestUser));
  }
}
export const userService = new UserService();
