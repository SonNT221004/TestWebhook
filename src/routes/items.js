const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.get('/',       itemController.getList);    // CMUC 1
router.get('/:id',    itemController.getDetail);  // CMUC 3
router.post('/',      itemController.createItem); // CMUC 2
router.put('/:id',    itemController.updateItem); // CMUC 4
router.delete('/:id', itemController.deleteItem); // CMUC 5

module.exports = router;
