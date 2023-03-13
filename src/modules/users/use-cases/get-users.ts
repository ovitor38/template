import { prisma } from "../../..";

class GetUsers {
  public async run() {
    const users = await prisma.user.findMany();
    const count = users.length;
    return [users, `was found ${count} Users`];
  }
}

export const getUsers = new GetUsers();
