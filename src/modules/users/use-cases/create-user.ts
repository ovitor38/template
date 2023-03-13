import { prisma } from "../../..";

class CreateUser {
  public async run(name: string, email: string) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
      select: {
        name: true,
        email: true,
      },
    });
    return user;
  }
}
export const createUser = new CreateUser();
