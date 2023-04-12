// import express from "express";
// import {
//   checkout,
//   paymentVerification,
// } from "../controllers/paymentController.js";

// const router = express.Router();

// router.route("/checkout").post(checkout);

// router.route("/paymentverification").post(paymentVerification);

// export default router;

// ********

// import express from "express";
// import {
//   checkout,
//   paymentVerification,
// } from "../controllers/paymentController.js";

// const router = express.Router();

// router.post("/checkout", checkout);

// router.post("/paymentverification", paymentVerification);

// export default router;

import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

const basePath = `/api/${process.env.RENDER_PROJECT_NAME}`;

router.route(`${basePath}/checkout`).post(checkout);

router.route(`${basePath}/paymentverification`).post(paymentVerification);

export default router;
