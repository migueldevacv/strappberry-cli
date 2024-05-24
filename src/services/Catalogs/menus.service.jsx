import { Request } from "@core/Request";
import { Env } from "@env/mainEnv";

export class MenusService {
    static route = `${Env.host}/menus`

    static getAllMenus = async () => await Request._get(this.route)

}
