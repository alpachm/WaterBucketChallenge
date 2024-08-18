"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const db = new sequelize_1.Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT, 10),
    logging: false
});
exports.default = db;
//# sourceMappingURL=index.js.map