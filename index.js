import express from "express";

import usersRoutes from "./routes/users.route.js";
import categoriesRoutes from "./routes/categories.route.js";

const app = express();
const port = 3001

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);

app.listen(port, () => {
  console.log(`I am ready to lisen you in port:${port}`);
});