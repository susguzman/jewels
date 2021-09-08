import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3001;

app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware')
  next();
});

app.use('/users', routes.users);
app.use('/categories', routes.categories);

app.listen(port, () => {
  console.log(`I am ready to lisen you in port:${port}`);
});