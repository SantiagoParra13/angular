export interface Product {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rsting:RatingProps;
}

interface RatingProps{
    rate:number;
    count:number;
    
}
