import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import hackerRouter from './api/contacts'

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/hackernews', hackerRouter);

app.use('/api/contacts', contactsRouter);
app.use(express.static('public'));

app.use('/api/hacks', hackerRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});