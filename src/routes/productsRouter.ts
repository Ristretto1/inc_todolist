import { Router, Request, Response } from 'express';

const products = [
  { id: 1, title: 'tomato' },
  { id: 2, title: 'orange' },
];

export const productsRouter = Router({});

productsRouter.get('/', (req: Request, res: Response) => {
  if (req.query.title) {
    const searchString = String(req.query.title);
    res.send(products.filter((el) => el.title.indexOf(searchString) > -1));
  } else {
    res.send(products);
  }
});
productsRouter.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const item = products.find((el) => el.id === Number(req.params.id));

  if (!item) {
    res.sendStatus(404);
    return;
  }
  res.send(item);
});
productsRouter.delete('/:id', (req: Request<{ id: string }>, res: Response) => {
  const item = products.find((el) => el.id === Number(req.params.id));
  if (!item) {
    res.sendStatus(404);
    return;
  } else {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === Number(req.params.id)) {
        products.splice(i, 1);
        console.log(products);
        res.sendStatus(204);
        return;
      }
    }
  }
});
productsRouter.post('/', (req: Request, res: Response) => {
  const { title } = req.body;
  const newItem = {
    id: Number(new Date()),
    title,
  };
  products.push(newItem);
  res.status(201).send(newItem);
});
productsRouter.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const params = req.body;
  let item = products.find((el) => el.id === Number(id));
  if (!item) {
    res.sendStatus(404);
    return;
  } else {
    item.title = req.body.title;
    res.send(item);
  }
});
