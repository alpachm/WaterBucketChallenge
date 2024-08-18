import { Request } from "express";

export interface ExtendedRequest extends Request{
    x_capacity: number;
    y_capacity: number;
    z_amount_wanted: number;
}