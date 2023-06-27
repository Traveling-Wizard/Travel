const express = require('express');
// require in the cardController

const router = express.Router();

router.get('/', (req: any, res: any) => {});

router.post('/', (req: any , res: any) => {});

router.patch('/', (req: any , res: any) => {});

router.delete('/', (req: any , res: any) => {});

router.use((req: any , res: any) => res.status(404).send('Invalid endpoint'));

module.exports = router;