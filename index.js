import express from "express";

import usersRoutes from "./routes/users.route.js";

const app = express();
const port = 3001

app.use(express.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`I am ready to lisen you in port:${port}`);
});