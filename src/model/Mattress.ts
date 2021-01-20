import { serializable } from "serializr";

class Mattress {
    @serializable
    name: string;

    @serializable
    price: number;

    @serializable
    reviewRating: number;
    
    @serializable
    imageFileName: string;

    constructor() {
        this.imageFileName  = "";
        this.name           = "";
        this.price          = 0;
        this.reviewRating   = 0;
    }

    get_Name(): string {
        return this.name;
    }

    set_Name(name: string): void {
        this.name = name;
    }

    get_Price(): number {
        return this.price;
    }

    set_Price(price: number): void {
        this.price = price;
    }

    get_ReviewRating(): number {
        return this.reviewRating;
    }

    set_ReviewRating(reviewRating: number): void {
        this.reviewRating = reviewRating;
    }

    get_ImageFileName(): string {
        return this.imageFileName;
    }

    set_ImageFileName(imageFileName: string): void {
        this.imageFileName = imageFileName;
    }
}

export default Mattress;