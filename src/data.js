/**
 * Shirt
 * Pants
 * Beachwear
 * Shoes
 * Dress
 */


const shirts = [
    {
        "id" : 1,
        "gender" : "m",
        "name" : "North Side",
        "type" : "shirt",
        "price" : 25,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
        "img1" : "men1a",
        "img2" : "men1b"
    },
    {
        "id" : 2,
        "gender" : "m",
        "name" : "Black Hoodie",
        "type" : "shirt",
        "price" : 28,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
        "img1" : "men2a",
        "img2" : "men2b"
    },
    {
        "id" : 3,
        "gender" : "m",
        "name" : "Bone Shirt",
        "type" : "shirt",
        "price" : 35,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
        "img1" : "men3a",
        "img2" : "men3b"
    },
    {
        "id" : 4,
        "gender" : "m",
        "name" : "Zebra Shirt",
        "type" : "shirt",
        "price" : 33,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
        "img1" : "men4a",
        "img2" : "men4b"
    },
    {
        "id" : 5,
        "gender" : "m",
        "name" : "Black Sleever",
        "type" : "shirt",
        "price" : 31,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
        "img1" : "men5a",
        "img2" : "men5b"
    },
    {
        "id" : 6,
        "gender" : "m",
        "name" : "Fancy Suit",
        "type" : "shirt",
        "price" : 40,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
        "img1" : "men6a",
        "img2" : "men6b"
    },
    {
        "id" : 7,
        "gender" : "f",
        "name" : "femaleShirt1",
        "type" : "shirt",
        "price" : 45,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
    },
    {
        "id" : 8,
        "gender" : "f",
        "name" : "femaleShirt2",
        "type" : "shirt",
        "price" : 55,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
    },
    {
        "id" : 9,
        "gender" : "f",
        "name" : "femaleShirt3",
        "type" : "shirt",
        "price" : 50,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
    },
    {
        "id" : 10,
        "gender" : "k",
        "name" : "kidsShirt1",
        "type" : "shirt",
        "price" : 25,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
    },
    {
        "id" : 11,
        "gender" : "k",
        "name" : "kidsShirt2",
        "type" : "shirt",
        "price" : 30,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }],
    },
    {
        "id" : 12,
        "gender" : "k",
        "name" : "kidsShirt3",
        "type" : "shirt",
        "price" : 27,
        "sizes" : ["XS", "S", "M", "L", "XL"],
        "stock" : [{
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }]
    },

]

exports.shirts = shirts;


const pants = [
    {
        "id" : 13,
        "gender" : "m",
        "name" : "Baggy Jeans",
        "type" : "pants",
        "price" : 40,
        "sizes" : [28, 30, 32, 34, 36, 38],
        "stock" : {
            "28" : 20,
            "30" : 25,
            "32" : 35,
            "34" : 35,
            "36" : 35,
            "38" : 20
        },
        "img1" : "men13a",
        "img2" : "men13b"
    },
    {
        "id" : 14,
        "gender" : "m",
        "name" : "Dark Pants",
        "type" : "pants",
        "price" : 35,
        "sizes" : [28, 30, 32, 34, 36, 38],
        "stock" : {
            "28" : 20,
            "30" : 25,
            "32" : 35,
            "34" : 35,
            "36" : 35,
            "38" : 20
        },
        "img1" : "men14a",
        "img2" : "men14b"
    },
    {
        "id" : 15,
        "gender" : "m",
        "name" : "Sunny Joggers",
        "type" : "pants",
        "price" : 37,
        "sizes" : [28, 30, 32, 34, 36, 38],
        "stock" : {
            "28" : 20,
            "30" : 25,
            "32" : 35,
            "34" : 35,
            "36" : 35,
            "38" : 20
        },
        "img1" : "men15a",
        "img2" : "men15b"
    },
    {
        "id" : 16,
        "gender" : "m",
        "name" : "Wild Pants",
        "type" : "pants",
        "price" : 40,
        "sizes" : [28, 30, 32, 34, 36, 38],
        "stock" : {
            "28" : 20,
            "30" : 25,
            "32" : 35,
            "34" : 35,
            "36" : 35,
            "38" : 20
        },
        "img1" : "men16a",
        "img2" : "men16b"
    },
    {
        "id" : 17,
        "gender" : "m",
        "name" : "Skating Jeans",
        "type" : "pants",
        "price" : 35,
        "sizes" : [28, 30, 32, 34, 36, 38],
        "stock" : {
            "28" : 20,
            "30" : 25,
            "32" : 35,
            "34" : 35,
            "36" : 35,
            "38" : 20
        },
        "img1" : "men17a",
        "img2" : "men17b"
    },
    {
        "id" : 18,
        "gender" : "m",
        "name" : "Color Shorts",
        "type" : "pants",
        "price" : 37,
        "sizes" : [28, 30, 32, 34, 36, 38],
        "stock" : {
            "28" : 20,
            "30" : 25,
            "32" : 35,
            "34" : 35,
            "36" : 35,
            "38" : 20
        },
        "img1" : "men18a",
        "img2" : "men18b"
    },
    {
        "id" : 19,
        "gender" : "f",
        "name" : "femalePants1",
        "type" : "pants",
        "price" : 60,
        "stock" : {
            "2" : 20,
            "4" : 20,
            "6" : 35,
            "8" : 30,
            "10" : 20,
            "12" : 15
        }
    },
    {
        "id" : 20,
        "gender" : "f",
        "name" : "femalePants2",
        "type" : "pants",
        "price" : 65,
        "stock" : {
            "2" : 20,
            "4" : 20,
            "6" : 35,
            "8" : 30,
            "10" : 20,
            "12" : 15
        }
    },
    {
        "id" : 21,
        "gender" : "f",
        "name" : "femalePants3",
        "type" : "pants",
        "price" : 63,
        "stock" : {
            "2" : 20,
            "4" : 20,
            "6" : 35,
            "8" : 30,
            "10" : 20,
            "12" : 15
        }
    },
    {
        "id" : 22,
        "gender" : "k",
        "name" : "kidsPants1",
        "type" : "pants",
        "price" : 30,
        "stock" : {
            "10" : 20,
            "12" : 20,
            "14" : 35,
            "16" : 30,
            "18" : 20,
        }
    },
    {
        "id" : 23,
        "gender" : "k",
        "name" : "kidsPants2",
        "type" : "pants",
        "price" : 33,
        "stock" : {
            "10" : 20,
            "12" : 20,
            "14" : 35,
            "16" : 30,
            "18" : 20,
        }
    },
    {
        "id" : 24,
        "gender" : "k",
        "name" : "kidsPants3",
        "type" : "pants",
        "price" : 28,
        "stock" : {
            "10" : 20,
            "12" : 20,
            "14" : 35,
            "16" : 30,
            "18" : 20,
        }
    }

]



exports.pants = pants;




const shoes = [

    {
        "id" : 22,
        "gender" : "m",
        "name" : "Modern Brown",
        "type" : "shoes",
        "price" : 60,
        "sizes" : [8, 9, 10, 11, 12],
        "stock" : [{
            "8" : 20,
            "9" : 20,
            "10" : 35,
            "11" : 30,
            "12" : 20
        }],
        "img1" : "men22",
        "img2" : "men22"
    },
    {
        "id" : 23,
        "gender" : "m",
        "name" : "Modern Dark",
        "type" : "shoes",
        "price" : 65,
        "sizes" : [8, 9, 10, 11, 12],
        "stock" : [{
            "8" : 20,
            "9" : 20,
            "10" : 35,
            "11" : 30,
            "12" : 20
        }],
        "img1" : "men23",
        "img2" : "men23"
    },
    {
        "id" : 24,
        "gender" : "m",
        "name" : "New Tennis",
        "type" : "shoes",
        "price" : 55,
        "sizes" : [8, 9, 10, 11, 12],
        "stock" : [{
            "8" : 20,
            "9" : 20,
            "10" : 35,
            "11" : 30,
            "12" : 20
        }],
        "img1" : "men24",
        "img2" : "men24"
    },
    {
        "id" : 25,
        "gender" : "m",
        "name" : "Classic Shoes",
        "type" : "shoes",
        "price" : 55,
        "sizes" : [8, 9, 10, 11, 12],
        "stock" : [{
            "8" : 20,
            "9" : 20,
            "10" : 35,
            "11" : 30,
            "12" : 20
        }],
        "img1" : "men25",
        "img2" : "men25"
    },
    {
        "id" : 26,
        "gender" : "m",
        "name" : "Classic Olive",
        "type" : "shoes",
        "price" : 55,
        "sizes" : [8, 9, 10, 11, 12],
        "stock" : [{
            "8" : 20,
            "9" : 20,
            "10" : 35,
            "11" : 30,
            "12" : 20
        }],
        "img1" : "men26",
        "img2" : "men26"
    },
    {
        "id" : 27,
        "gender" : "m",
        "name" : "Classic Black",
        "type" : "shoes",
        "price" : 55,
        "sizes" : [8, 9, 10, 11, 12],
        "stock" : [{
            "8" : 20,
            "9" : 20,
            "10" : 35,
            "11" : 30,
            "12" : 20
        }],
        "img1" : "men27",
        "img2" : "men27"
    },
    {
        "id" : 25,
        "gender" : "f",
        "name" : "femaleShoes1",
        "type" : "shoes",
        "price" : 50,
        "stock" : {
            "5" : 20,
            "6" : 20,
            "7" : 35,
            "8" : 30,
            "9" : 20
        }
    },
    {
        "id" : 26,
        "gender" : "f",
        "name" : "femaleShoes2",
        "type" : "shoes",
        "price" : 54,
        "stock" : {
            "5" : 20,
            "6" : 20,
            "7" : 35,
            "8" : 30,
            "9" : 20
        }
    },
    {
        "id" : 27,
        "gender" : "f",
        "name" : "femaleShoes3",
        "type" : "shoes",
        "price" : 60,
        "stock" : {
            "5" : 20,
            "6" : 20,
            "7" : 35,
            "8" : 30,
            "9" : 20
        }
    },
    {
        "id" : 28,
        "gender" : "k",
        "name" : "kidsShoes1",
        "type" : "shoes",
        "price" : 20,
        "stock" : {
            "1" : 20,
            "2" : 20,
            "3" : 35,
            "4" : 30,
            "5" : 20
        }
    },
    {
        "id" : 29,
        "gender" : "k",
        "name" : "kidsShoes2",
        "type" : "shoes",
        "price" : 23,
        "stock" : {
            "1" : 20,
            "2" : 20,
            "3" : 35,
            "4" : 30,
            "5" : 20
        }
    },
    {
        "id" : 30,
        "gender" : "k",
        "name" : "kidsShoes3",
        "type" : "shoes",
        "price" : 25,
        "stock" : {
            "1" : 20,
            "2" : 20,
            "3" : 35,
            "4" : 30,
            "5" : 20
        }
    }
]

exports.shoes = shoes;


const dresses = [
    {
        "id" : 31,
        "gender" : "f",
        "name" : "dress1",
        "type" : "dresses",
        "price" : 70,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    },
    {
        "id" : 32,
        "gender" : "f",
        "name" : "dress2",
        "type" : "dresses",
        "price" : 75,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    },
    {
        "id" : 33,
        "gender" : "f",
        "name" : "dress3",
        "type" : "dresses",
        "price" : 75,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    }
]

exports.dresses = dresses;

const beachWear = [
    {
        "id" : 34,
        "gender" : "m",
        "name" : "swimwear1",
        "type" : "beachwear",
        "price" : 45,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    },
    {
        "id" : 35,
        "gender" : "m",
        "name" : "swimwear2",
        "type" : "beachwear",
        "price" : 40,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    },
    {
        "id" : 36,
        "gender" : "m",
        "name" : "swimwear3",
        "type" : "beachwear",
        "price" : 42,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    },
    {
        "id" : 37,
        "gender" : "f",
        "name" : "bikini1",
        "type" : "beachwear",
        "price" : 55,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    },
    {
        "id" : 38,
        "gender" : "f",
        "name" : "bikini2",
        "type" : "beachwear",
        "price" : 60,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    },
    {
        "id" : 39,
        "gender" : "f",
        "name" : "bikini3",
        "type" : "beachwear",
        "price" : 65,
        "stock" : {
            "xs" : 20,
            "s" : 20,
            "m" : 35,
            "l" : 30,
            "xl" : 20
        }
    }
]

exports.beachWear = beachWear;

const newsletter = [
    {
        "first" : "Mario",
        "last" : "Gomez",
        "email" : "magv181091@gmail.com",
        "birthdate" : "18/10/1991",
        "offers" : true,
        "nation" : true,
        "news" : true
    }
]

exports.newsletter = newsletter;

const users = [
    {
        "first" : "Mario",
        "last" : "Gomez",
        "age" : "30",
        "id" : "xxxxxxxx",
        "email" : "magv181091@gmail.com",
        "birthdate" : "18/10/1991",
        "phone" : "3123456789",
        "address" : "Calle 1 # 2 - 3"
    },
    {
        "first" : "Natalia",
        "last" : "Alfonso",
        "age" : "30",
        "id" : "xxxxxxxx",
        "email" : "naty.alfonso@hotmail.com",
        "birthdate" : "29/12/1991",
        "phone" : "3001234567",
        "address" : "Calle 1 # 2 - 3"
    },
]

exports.users = users;

const orders = [
    {
        "id" : 1,
        "date" : "03/02/2022",
        "content" : "clothes name",
        "email" : "magv181091@gmail.com",
        "phone" : "3123456789",
        "address" : "Calle 1 # 2 - 3",
        "name": "Mario Gómez",
        "message" : "Please leave with doorman in case I am not home",
        "status" : "created"
    }
]

exports.orders = orders;