interface menuItems {
    name: string;
    price: number;
    description: string;
    img: string;

}
const momo: menuItems[] = [
    {
        name: "Veg Momo",
        price: 20,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chicken Momo",
        price: 30,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Fried Veg Momo",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Fried Chicken Momo",
        price: 60,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chilli Veg Momo",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chilli Chicken Momo",
        price: 70,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
];

const chowmein: menuItems[] = [

    {
        name: "Veg Hakka Noodles",
        price: 40,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Egg Hakka Noodles",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chicken Hakka Noodles",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Mix Hakka Noodles",
        price: 60,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    }
]
const rolls: menuItems[] = [

    {
        name: "Veg Roll",
        price: 30,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chicken Roll",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Mixed Roll",
        price: 60,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
]

const pakoda: menuItems[] = [

    {
        name: "Chicken Pakoda",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chicken Lollipop",
        price: 30,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chicken Leg Piece",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
]

const mainCourse: menuItems[] = [

    {
        name: "Veg Fried Rice",
        price: 50,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Egg Fried Rice",
        price: 60,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chicken Fried Rice",
        price: 70,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chicken Biryani",
        price: 110,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    },
    {
        name: "Chilli Chicken",
        price: 60,
        description: "Veg Momo made with Cabbage",
        img: "/images/veg-momos.jpg",
    }
]

export default [momo, chowmein, rolls, pakoda, mainCourse]
export const itemnames = ["Momo", "Noodles", "Rolls", "Pakodas", "Main Dish"]