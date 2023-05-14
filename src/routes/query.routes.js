
import { Router } from "express";

import { getProducerById, getProducers, getStoredProcedure, getStoredProcedure_noPool } from "../controllers/query.controller";

const router = Router();

//router.get('/producers', getProducers);

//router.post('/producers', createNewProducer);

//router.get('/producers/:id', getProducerById);

router.get('/producers', getStoredProcedure_noPool);

export default router;