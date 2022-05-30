import { ProductToBeUpdated } from "./ProductToBeUpdated";

export class TopFiveProducts {
    constructor(public id: number, public orderDate:string, public lines: ProductToBeUpdated[]){}
}