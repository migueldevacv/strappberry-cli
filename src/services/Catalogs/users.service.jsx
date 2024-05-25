import { Request } from "@core/Request";
import { Env } from "@env/mainEnv";

export class UsersService {
    static route = `${Env.host}/users`

    static getAllUsers = async () => await Request._get(this.route)

    static post = async (data) => await Request._post(this.route, data)

    static drop = async (id) => await Request._delete(`${this.route}/${id}`)

    static edit = async (id, data) => await Request._put(`${this.route}/${id}`, data)

}
