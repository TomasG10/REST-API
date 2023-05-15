
import { Router } from "express";

import { getStoredProcedure, getStoredProcedureConPool } from "../controllers/query.controller";


const router = Router();

router.get('/producers/sinpool', getStoredProcedure);
router.get('/producers/pool', getStoredProcedureConPool);

export default router;