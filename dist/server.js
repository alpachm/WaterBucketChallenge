"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT ? +process.env.PORT : 8001;
app_1.default.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});
//# sourceMappingURL=server.js.map