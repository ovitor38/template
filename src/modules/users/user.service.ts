import {
  createUser,
  deleteUser,
  getOneuser,
  getUsers,
  updateUser,
} from "./use-cases";

class UserService {
  public async createService(name: string, email: string) {
    return await createUser.run(name, email);
  }

  public async getOneService(id: number) {
    return await getOneuser.run(id);
  }

  public async getUsers() {
    return await getUsers.run();
  }

  public async deleteUserService(id: number) {
    return await deleteUser.run(id);
  }

  public async updateuserService(id: number, name?: string, email?: string) {
    return await updateUser.run(id, name, email);
  }
}
export const userService = new UserService();
