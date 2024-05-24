import { Request } from "@core/Request";

export default class ProductService {

    static async getAllProducts() {
        return await Request._get(env)
    }
}
