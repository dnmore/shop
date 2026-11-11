import { db } from "./src/prisma/db";
import { faker } from "@faker-js/faker";

function randomDateBetweenJanAndJun2026() {
  return faker.date.between({
    from: new Date("2026-01-01T00:00:00.000Z"),
    to: new Date("2026-06-30T23:59:59.999Z"),
  });
}

async function main() {
  // =========================
  // CATEGORIES
  // =========================

  const categories = await Promise.all(
    [
      { title: "hats" },
      { title: "sneakers" },
      { title: "jackets" },
      { title: "women" },
      { title: "men" },
    ].map((data) => db.orm.public.Category.create(data)),
  );

  // console.log("Seeded categories", { categories });

  // =========================
  // PRODUCTS
  // =========================

  const products = await Promise.all(
    [
      // HATS
      {
        name: "Brown Brim",
        categoryTitle: categories[0].title,
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: "25",
      },
      {
        name: "Blue Beanie",
        categoryTitle: categories[0].title,
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: "18",
      },
      {
        name: "Brown Cowboy",
        categoryTitle: categories[0].title,
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: "35",
      },
      {
        name: "Grey Brim",
        categoryTitle: categories[0].title,
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: "25",
      },
      {
        name: "Green Beanie",
        categoryTitle: categories[0].title,
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: "18",
      },

      {
        name: "Red Beanie",
        categoryTitle: categories[0].title,
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: "18",
      },

      // SNEAKERS

      {
        name: "Adidas NMD",
        categoryTitle: categories[1].title,
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: "220",
      },
      {
        name: "Adidas Yeezy",
        categoryTitle: categories[1].title,
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: "280",
      },
      {
        name: "Black Converse",
        categoryTitle: categories[1].title,
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: "110",
      },
      {
        name: "Nike White AirForce",
        categoryTitle: categories[1].title,
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: "160",
      },
      {
        name: "Nike Red High Tops",
        categoryTitle: categories[1].title,
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: "160",
      },
      {
        name: "Nike Brown High Tops",
        categoryTitle: categories[1].title,
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: "160",
      },

      // JACKETS

      {
        name: "Black Jean Shearling",
        categoryTitle: categories[2].title,
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: "125",
      },
      {
        name: "Blue Jean Jacket",
        categoryTitle: categories[2].title,
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: "90",
      },
      {
        name: "Grey Jean Jacket",
        categoryTitle: categories[2].title,
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: "90",
      },
      {
        name: "Brown Shearling",
        categoryTitle: categories[2].title,
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: "165",
      },

      // WOMEN

      {
        name: "Blue Tanktop",
        categoryTitle: categories[3].title,
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: "25",
      },
      {
        name: "Floral Blouse",
        categoryTitle: categories[3].title,
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: "20",
      },
      {
        name: "Floral Dress",
        categoryTitle: categories[3].title,
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: "80",
      },
      {
        name: "Red Dots Dress",
        categoryTitle: categories[3].title,
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: "80",
      },
      {
        name: "Striped Sweater",
        categoryTitle: categories[3].title,
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: "45",
      },
      {
        name: "Yellow Track Suit",
        categoryTitle: categories[3].title,
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: "135",
      },

      // MEN

      {
        name: "Camo Down Vest",
        categoryTitle: categories[4].title,
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: "325",
      },
      {
        name: "Floral T-shirt",
        categoryTitle: categories[4].title,
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: "20",
      },
      {
        name: "Black & White Longsleeve",
        categoryTitle: categories[4].title,
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: "25",
      },
      {
        name: "Pink T-shirt",
        categoryTitle: categories[4].title,
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: "25",
      },
      {
        name: "Jean Long Sleeve",
        categoryTitle: categories[4].title,
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: "40",
      },
      {
        name: "Burgundy T-shirt",
        categoryTitle: categories[4].title,
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: "25",
      },
    ].map((data) => db.orm.public.Product.create(data)),
  );
  // console.log("Seeded products", { products });

  // =========================
  // ORDERS
  // =========================

  for (let i = 0; i < 200; i++) {
    // Generate a random order date
    const orderDate = randomDateBetweenJanAndJun2026();

    // Select a random order status
    const status = faker.helpers.arrayElement([
      "PENDING",
      "PAID",
      "COMPLETED",
      "RETURNED",
      "REFUNDED",
    ]);

    // Generate a random number of distinct products
    const itemsCount = faker.number.int({
      min: 1,
      max: 4,
    });

    // Select random products
    const selectedItems = faker.helpers.arrayElements(products, itemsCount);

    // Prepare the order items
    const orderItemsData = selectedItems.map((item) => {
      // Random quantity between 1 and 3
      const quantity = faker.number.int({
        min: 1,
        max: 3,
      });

      // Convert unit price into cents
      const unitPriceCents = Math.round(Number(item.price) * 100);

      // Calculate total price in cents
      const totalPriceCents = unitPriceCents * quantity;

      return {
        itemId: item.id,
        quantity,
        unitPrice: (unitPriceCents / 100).toFixed(2),
        totalPrice: (totalPriceCents / 100).toFixed(2),
      };
    });

    // Calculate the total order amount in cents
    const totalCents = orderItemsData.reduce(
      (acc, item) => acc + Math.round(Number(item.totalPrice) * 100),
      0,
    );

    // Convert total into a decimal string
    const total = (totalCents / 100).toFixed(2);

    // Create the order and its related order items
    await db.orm.public.Order.create({
      status,
      total,
      createdAt: orderDate.toISOString(),

      // Prisma 8 nested relation creation
      items: (items) => items.create(orderItemsData),
    });
  }

  console.log("database seeded");
  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
