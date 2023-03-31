// import { prisma } from "../../..";
// import { UserUpadateModel } from "../model/user.model";
// import { getOneuser } from "./get-one-user";

// class UpdateUser {
//   public async run(rawData: UserUpadateModel) {
//     await getOneuser.run(rawData.id);
//     const { id, name, email } = rawData;

//     await prisma.user.update({
//       where: {
//         id,
//       },
//       data: {
//         name,
//         email,
//       },
//     });
//     const data = {
//       ...(name && { name: name }),
//       ...(email && { email: email }),
//     };
//     const updatedFields = Object.keys(data).join(", ").toLocaleUpperCase();
//     return `The field(s) ${updatedFields} were updated in the user records.`;
//   }
// }
// export const updateUser = new UpdateUser();
