import { Request } from "@core/Request";
import { Env } from "@env/mainEnv";

export class ProductService {
    static route = `${Env.host}/products`

    static getAllProducts = async () => await Request._get(this.route)

}
