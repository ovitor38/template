import { UserRepository } from "../../../repositorys/user-repository"
import { CreateUser } from "../use-cases"
import { UserController } from "../user.controller"
import { UserService } from "../user.service"


const userRepository = new UserRepository()
const createUser = new CreateUser(userRepository)
const userCreateService = new UserService(createUser)
const userCreateController = new UserController(userCreateService)

export { userCreateController }