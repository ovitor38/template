import { prisma } from "../../..";

class GetOneUser {
  public async run(id: number) {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    });

    return user;
  }
}
export const getOneuser = new GetOneUser();
