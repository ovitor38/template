import { UserRepository } from "../../../repositorys/user-repository";
import { CreateUser } from "../use-cases";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

class CreateUserFactory {
  async handle(req, res) {
    const userRepository = new UserRepository();
    const createUser = new CreateUser(userRepository);
    const userCreateService = new UserService(createUser);
    const userController = new UserController(userCreateService);
    await userController.createUser(req, res);
  }
}

export const createUserFactory = new CreateUserFactory();