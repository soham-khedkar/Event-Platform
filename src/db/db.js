import pizzaImg from "../assets/images/brooke-lark-oaz0raysASk-unsplash.jpg";
import burgerImg from "../assets/images/casey-lee-awj7sRviVXo-unsplash.jpg";
import cocaImg from "../assets/images/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg";
import saladImg from "../assets/images/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg";
import waterImg from "../assets/images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";
import iceCreamImg from "../assets/images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg";
import kebabImg from "../assets/images/brooke-lark--F_5g8EEHYE-unsplash.jpg";

export function getData() {
  return [
    { title: "Pizza", price: 17.99, Image: pizzaImg,id:1 },
    { title: "Burger", price: 15, Image: burgerImg,id:2 },
    { title: "Coca", price: 3.5, Image: cocaImg ,id:3},
    { title: "Kebab", price: 13.99, Image: kebabImg,id:4 },
    { title: "Salad", price: 2.5, Image: saladImg,id:5 },
    { title: "Bottle of water", price: 0.99, Image: waterImg,id:6 },
    { title: "Ice cream", price: 2.99, Image: iceCreamImg,id:7 },
  ];
}