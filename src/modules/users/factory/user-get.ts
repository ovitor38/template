import { UserRepository } from "../../../repositorys/user-repository";
import { CreateUser, GetUser } from "../use-cases";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

class CreateUserFactory {
  async handle(req, res) {
    const userRepository = new UserRepository();
    const getUser = new GetUser(userRepository);
    const userCreateService = new UserService(getUser);
    const userController = new UserController(userCreateService);
    await userController.getUser(req, res);
  }
}

export const createUserFactory = new CreateUserFactory();
