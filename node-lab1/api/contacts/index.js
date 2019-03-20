import express from 'express';
import { contacts } from './contacts';
import { hacks } from '../hacks/hacks.js'

const router = express.Router(); // eslint-disable-line
//router.get('/', (req, res) => {
//    res.send({ contacts: contacts });
//});

router.get('/', (req, res) => {
    res.send({ hacks: hacks });
});

export default router;