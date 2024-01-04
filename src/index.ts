import express from 'express';
import { productsRouter } from './routes/productsRouter';
import { addressesRouter } from './routes/addressesRouter';
const app = express();
const port = 3000;

// middleware for req.body
app.use(express.json());

// middleware for routes
app.use('/products', productsRouter);
app.use('/addresses', addressesRouter);

// start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
