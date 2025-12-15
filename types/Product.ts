import { insertProductSchema } from "@/lib/validators";
import z from "zod";

export type Product = {
    id? : string;
    name : string;
    slug : string;
    category : string ;
    description: string; 
    images: string[];
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    stock: number;
    isFeatured: boolean;
    banner: string | null;
};

export type Product2 = z.infer<typeof insertProductSchema> & {
    id? : string;
    rating: number | string;
    createdAt: Date;

};
