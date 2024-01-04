import { Router, Request, Response } from 'express';

const addresses = [
  { id: 1, value: 'Gubkina st 31' },
  { id: 2, value: 'Mira 22' },
];

export const addressesRouter = Router({});

// addressess
addressesRouter.get('/', (req: Request, res: Response) => {
  res.send(addresses);
});
addressesRouter.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const item = addresses.find((el) => el.id === Number(req.params.id));

  if (!item) {
    res.sendStatus(404);
    return;
  }
  res.send(item);
});
