import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import { db } from "./prisma/db";

const app: Express = express();
const port = 8000;

app.use(express.json());

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "Success!" });
  } catch (err) {
    next(err);
  }
});

// get all categories
app.get(
  "/api/categories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await db.orm.public.Category.select("title").all();
      res.status(200).json({ categories });
    } catch (err) {
      next(err);
    }
  },
);

// get all products
app.get("/api/products/all", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await db.orm.public.Product.select("id", "name", "price", "imageUrl", "categoryTitle").all();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});

// get homepage products
app.get("/api/products", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await db.orm.public.Product.orderBy((p) => p.createdAt.desc())
  .limit(8).all();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});



// get all products per categoryTitle
app.get(
  "/api/categories/:categoryTitle",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryTitle = String(req.params.categoryTitle);
      const categoryProducts = await db.orm.public.Product.where((c) =>
        c.categoryTitle.eq(categoryTitle),
      ).all();

      res.status(200).json(categoryProducts);
    } catch (err) {
      next(err);
    }
  },
);

// get product by id
app.get(
  "/api/product/:productId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = String(req.params.productId);
      const product = await db.orm.public.Product.where((c) =>
        c.id.eq(productId),
      ).first();

      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
