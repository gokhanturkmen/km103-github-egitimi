import express, {Request, Response} from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/km103', (req: Request, res: Response) => {
    res.send('Hello KM103!');
});

app.post('/km103', (req: Request, res: Response) => {
  res.send('Post yapiyorum.');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});