import { prisma } from "../../..";
import { getOneuser } from "./get-one-user";

class DeleteUser {
  public async run(id: number) {
    const userId = (await getOneuser.run(id)).id
    await prisma.user.delete({ where: { id } });
    return `User ${userId} deleted`;
  }
}
export const deleteUser = new DeleteUser();
