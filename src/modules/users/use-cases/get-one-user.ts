import { prisma } from "../../..";
import { BadRequestError } from "../../../helpers/api-errors";

class GetOneUser {
  public async run(id: number) {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) {
      throw new BadRequestError("Usuário não encontrado");
    }
    return user
  }
}
export const getOneuser = new GetOneUser();
