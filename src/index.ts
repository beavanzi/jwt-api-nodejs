import "reflect-metadata";
import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import "./database/connect";

const app = express();

dotenv.config();
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
