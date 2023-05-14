
import { Router } from "express";

import { getStoredProcedure } from "../controllers/query.controller";

const router = Router();

router.get('/producers', getStoredProcedure);

export default router;