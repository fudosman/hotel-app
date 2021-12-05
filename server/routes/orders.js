const router = require('express').Router();
const order = require('../controller/order');

// get users orders
router.get('/continental', order.continental);
router.get('/hotSpicy', order.hotSpicy);
router.get('/otherSelections', order.otherSelections);
router.get('/pastries', order.pastries);
router.get('/specialBreakfast', order.specialBreakfast);
router.get('/localDishes', order.localDishes);

module.exports = router;