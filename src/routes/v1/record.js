const express = require('express');
const validate = require('../../middlewares/validate');
const validation = require('../../validations/record');
const Controller = require('../../controllers/recordController');

const router = express.Router();

router.post('/', validate(validation.forRecords), Controller.get);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Record
 *   description: Record management and retrieval
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Filter the records.
 *     description: Filter the records with given parameters.
 *     tags: [Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - startDate
 *               - endDate
 *               - minCount
 *               - maxCount
 *             properties:
 *               startDate:
 *                 type: date
 *                 format: YYYY-MM-DD
 *               endDate:
 *                 type: date
 *                 format: YYYY-MM-DD
 *               minCount:
 *                 type: number
 *               maxCount:
 *                  type: number
 *             example:
 *               startDate: 2017-01-28
 *               endDate: 2017-01-28
 *               minCount: 2700
 *               maxCount: 2900
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Record'
 *
 */
