import { IUserRepo } from "../../../repositorys/user-repository";

export class GetUser {
  private userRepo: IUserRepo;
  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async execute(id:number) {
    const user = await this.userRepo.getUser(id);
    return [user, { success: true, errors: null }];
  }
}
