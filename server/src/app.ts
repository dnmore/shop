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
      const categories = await db.orm.public.Category.all();
      res.status(200).json({ categories });
    } catch (err) {
      next(err);
    }
  },
);

// get all products per categoryId
app.get(
  "/api/categories/:categoryId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId = String(req.params.categoryId);
      const categoryProducts = await db.orm.public.Product.where((c) =>
        c.categoryId.eq(categoryId),
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
  console.log(`Example app listening on port ${port}`);
});
