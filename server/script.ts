import { db } from "./src/prisma/db";

async function main() {
  // =========================
  // CATEGORIES
  // =========================

  const categories = await Promise.all(
    [
      { title: "Hats", imageUrl:"https://i.ibb.co/cvpntL1/hats.png" },
      { title: "Sneakers", imageUrl:"https://i.ibb.co/HTXkp1ns/sneakers.png" },
      { title: "Jackets", imageUrl:"https://i.ibb.co/cS72wbwm/jackets.jpg" },
      { title: "Womens", imageUrl:"https://i.ibb.co/7CQVJNm/womens.png" },
      { title: "Mens", imageUrl:"https://i.ibb.co/Qv5TRkhw/mens.jpg" },
    ].map((data) => db.orm.public.Category.create(data)),
  );

  console.log("Seeded categories",{ categories });

  // =========================
  // PRODUCTS
  // =========================

  const products = await Promise.all(
    [

       // HATS
      {
        name: "Brown Brim",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: "25",
      },
      {
        name: "Blue Beanie",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: "18",
      },
      {
        name: "Brown Cowboy",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: "35",
      },
      {
        name: "Grey Brim",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: "25",
      },
      {
        name: "Green Beanie",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: "18",
      },
      {
        name: "Palm Tree Cap",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/rvJdg4X/palm-tree-cap.png",
        price: "14",
      },
      {
        name: "Red Beanie",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: "18",
      },
      {
        name: "Wolf Cap",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: "14",
      },
      {
        name: "Blue Snapback",
        categoryId: categories[0].id,
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: "16",
      },
       // SNEAKERS

       {
       
        name: 'Adidas NMD',
        categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: "220",
      },
      {
        
        name: 'Adidas Yeezy',
         categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: "280",
      },
      {
        
        name: 'Black Converse',
         categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: "110",
      },
      {
        
        name: 'Nike White AirForce',
         categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: "160",
      },
      {
       
        name: 'Nike Red High Tops',
         categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: "160",
      },
      {
       
        name: 'Nike Brown High Tops',
         categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: "160",
      },
      {
        
        name: 'Air Jordan Limited',
         categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: "190",
      },
      {
       
        name: 'Timberlands',
         categoryId: categories[1].id,
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: "200",
      },

      // JACKETS

       {
        
        name: 'Black Jean Shearling',
         categoryId: categories[2].id,
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: "125",
      },
      {

        name: 'Blue Jean Jacket',
          categoryId: categories[2].id,
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: "90",
      },
      {
        
        name: 'Grey Jean Jacket',
          categoryId: categories[2].id,
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: "90",
      },
      {
        
        name: 'Brown Shearling',
          categoryId: categories[2].id,
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: "165",
      },
      {
        
        name: 'Tan Trench',
          categoryId: categories[2].id,
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: "185",
      },
      // WOMENS

      {
       
        name: 'Blue Tanktop',
          categoryId: categories[3].id,
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: "25",
      },
      {
        
        name: 'Floral Blouse',
          categoryId: categories[3].id,
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: "20",
      },
      {
        
        name: 'Floral Dress',
          categoryId: categories[3].id,
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: "80",
      },
      {
        
        name: 'Red Dots Dress',
          categoryId: categories[3].id,
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: "80",
      },
      {
        
        name: 'Striped Sweater',
          categoryId: categories[3].id,
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: "45",
      },
      {
        
        name: 'Yellow Track Suit',
          categoryId: categories[3].id,
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: "135",
      },
      {
       
        name: 'White Blouse',
          categoryId: categories[3].id,
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: "20",
      },

      // MENS

      {
        
        name: 'Camo Down Vest',
           categoryId: categories[4].id,
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: "325",
      },
      {
        
        name: 'Floral T-shirt',
           categoryId: categories[4].id,
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: "20",
      },
      {
        
        name: 'Black & White Longsleeve',
           categoryId: categories[4].id,
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: "25",
      },
      {
        
        name: 'Pink T-shirt',
           categoryId: categories[4].id,
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: "25",
      },
      {
        
        name: 'Jean Long Sleeve',
           categoryId: categories[4].id,
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: "40",
      },
      {
        
        name: 'Burgundy T-shirt',
           categoryId: categories[4].id,
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: "25",
      },
    ].map((data) => db.orm.public.Product.create(data)),
  );
  console.log("Seeded products", { products });

  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
