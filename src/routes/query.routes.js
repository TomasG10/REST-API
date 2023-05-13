import { Router } from "express";

import { createNewProducer, getProducers } from "../controllers/query.controller";

const router = Router();

router.get('/producers', getProducers);

//router.post('/producers', createNewProducer);

export default router;