import { Auth } from "@core/Auth";
import { Request } from "@core/Request";
import { Env } from "@env/mainEnv";
export class AuthService {
    static route = `${Env.host}/`

    static login = async (data) => {
        const response = await Request._post(`${Env.host}/login`, data)

        if (!response.status) return window.alert(response.errors);

        return this.successfulLogin(response.data)
    }
    static register = async (data) => {
        const response = await Request._post(`${Env.host}/register`, data)

        if (!response.status) return window.alert(response.errors);

        return this.successfulLogin(response.data)
    }

    static successfulLogin = ({ token, user }) => {
        Auth.setToken(token)
        Auth.setUser(user)
        Auth.setRole(user.role_id)
        Auth.verify()
    }
}
