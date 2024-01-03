import express, {Request, Response} from 'express'
const app = express()
const port = 3000

// middleware for req.body
app.use(express.json())

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Gubkina st 31'}, {id: 2, value: 'Mira 22'}]

// products
app.get('/products', (req: Request, res: Response) => {
  if(req.query.title){
    const searchString = String(req.query.title)
    res.send(products.filter(el => el.title.indexOf(searchString) > -1))
  } else{
    res.send(products)
  }
})
app.get('/products/:id', (req: Request<{id: string}>, res: Response) => {
  const item = products.find(el => el.id === Number(req.params.id))

  if(!item) {
    res.sendStatus(404)
    return
  }
  res.send(item)
})
app.delete('/products/:id', (req: Request<{id: string}>, res: Response) => {
  const item = products.find(el => el.id === Number(req.params.id))
  if(!item) {
    res.sendStatus(404)
    return
  } else {
    for(let i = 0; i < products.length; i++) {
      if(products[i].id === Number(req.params.id)) {
        products.splice(i, 1)
        console.log(products)
        res.sendStatus(204)
        return
      }
    }
  }
})
app.post('/products/', (req: Request, res: Response) => {
  const {title} = req.body
  const newItem = {
    id: Number(new Date()),
    title
  }
  products.push(newItem)
  res.status(201).send(newItem)
})
app.put('/products/:id', (req: Request, res: Response) => {
  const {id} = req.params
  const params = req.body
  let item = products.find(el => el.id === Number(id))
  if(!item){
    res.sendStatus(404)
    return
  } else {
    item.title = req.body.title
    res.send(item)
  }
})

// addressess
app.get('/addresses', (req: Request, res: Response) => {
  res.send(addresses)
})
app.get('/addresses/:id', (req: Request<{id: string}>, res: Response) => {
  const item = addresses.find(el => el.id === Number(req.params.id))

  if(!item) {
    res.sendStatus(404)
    return
  }
  res.send(item)
})


// start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})