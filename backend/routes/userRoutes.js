const express = require('express');
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController');

router.route('/user').get(login).post(register);


module.exports = router;