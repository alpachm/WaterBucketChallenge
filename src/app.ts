import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import solutionRouter from "./routes/solution.route";

const app: Application = express();
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP. Please try again in one hour"
})

app.use(express.json());
app.use(helmet());
app.use(hpp());
if(process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", limiter)

app.use("/api/v1", solutionRouter)

export default app;
