import { ProductToBeUpdatedWithId } from 'src/app/models/productToBeUpdatedWithId';

export class Validator {

    public static Validate(prod: ProductToBeUpdatedWithId){
        if(!this.validateQty(prod.qty) || !this.validateDescription(prod.description)){
            return false;
        }else{
            return true;
        }
    }

    private static validateQty(qty: number){
        return (qty === 0);
    }

    private static validateDescription(description: string){
        return (description === "");
    }

}