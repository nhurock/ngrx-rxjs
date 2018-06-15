import {ToppingsService} from './toppings.service';
import {PizzasService} from './pizzas.service';

export const services: any[] = [
    ToppingsService,
    PizzasService
];

export * from './toppings.service';
export * from './pizzas.service';