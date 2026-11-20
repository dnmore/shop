import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import { db } from "./prisma/db";
import cors from "cors";

const app: Express = express();

// middleware
app.use(express.json());

const allowedOrigins = ["http://localhost:3000", process.env.CLIENT_URL].filter(
  (origin): origin is string => Boolean(origin),
);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

// health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from Express!" });
});

// get all products
app.get(
  "/api/products/all",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await db.orm.public.Product.select(
        "id",
        "name",
        "price",
        "imageUrl",
        "categoryTitle",
      ).all();
      res.status(200).json({ products });
    } catch (err) {
      next(err);
    }
  },
);

// get homepage products
app.get(
  "/api/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await db.orm.public.Product.orderBy((p) =>
        p.createdAt.desc(),
      )
        .limit(8)
        .all();
      res.status(200).json({ products });
    } catch (err) {
      next(err);
    }
  },
);

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

// get all orders
app.get(
  "/api/orders/all",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await db.orm.public.Order.all();
      res.status(200).json({ orders });
    } catch (err) {
      next(err);
    }
  },
);

// get Dashboard stats
app.get(
  "/api/dashboard/stats",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stats = await Promise.all([
        db.orm.public.Order.where({ status: "COMPLETED" }).aggregate((a) => ({
          totalSales: a.sum("total"),
        })),
        db.orm.public.Order.aggregate((a) => ({ totalOrders: a.count() })),
        db.orm.public.Order.where({ status: "COMPLETED" }).aggregate((a) => ({
          averageOrder: a.avgDecimal("total"),
        })),
      ]);

      res.status(200).json({
        stats,
      });
    } catch (err) {
      next(err);
    }
  },
);

// get chart data
app.get(
  "/api/dashboard/chart-data",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const chartData = await db.orm.public.Order.where({ status: "COMPLETED" })
        .select("createdAt", "total")
        .orderBy((p) => p.createdAt.asc())
        .all();

      const chartDataPerDay = new Map<string, number>();
      chartData.forEach((order) => {
        const date = order.createdAt.toString().split(" ")[0]; // Get the date part only (YYYY-MM-DD)
        const currentRevenue = chartDataPerDay.get(date) || 0;
        chartDataPerDay.set(date, currentRevenue + parseFloat(order.total));
      });
      res
        .status(200)
        .json(
          Array.from(chartDataPerDay.entries()).map(([date, total]) => ({
            date,
            total,
          })),
        );
    } catch (err) {
      next(err);
    }
  },
);

// get last orders
app.get(
  "/api/orders/last",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lastOrders = await db.orm.public.Order.orderBy((p) =>
        p.createdAt.desc(),
      )
        .limit(8)
        .all();
      res.status(200).json({ lastOrders });
    } catch (err) {
      next(err);
    }
  },
);

// 404 handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
