"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const hpp_1 = __importDefault(require("hpp"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const solution_route_1 = __importDefault(require("./routes/solution.route"));
const app = (0, express_1.default)();
const limiter = (0, express_rate_limit_1.default)({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP. Please try again in one hour"
});
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, hpp_1.default)());
if (process.env.NODE_ENV === "development")
    app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use("/api/v1", limiter);
app.use("/api/v1", solution_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map