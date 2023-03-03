import { database } from "../../..";

export class CreateUser {
    async create (name: string, email: string){
        const user = await database.user.create({
            data:{
                name,
                email
            }
        })
        return user
    }
}