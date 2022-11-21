const express = require('express');
const router = express.Router();
const exercises = require('../controllers/exercises.controller');


router.get('/problemOne', exercises.exerciseOne);
router.get('/problemTwo', exercises.exerciseTwo);
router.post('/problemTwo', exercises.exerciseTwo);
router.post('/problemTwo/order', exercises.exerciseTwoOrder);
router.get('/problemTwo/:id', exercises.exerciseTwoId);
router.get('/problemThree', exercises.exerciseThree);
router.get('/problemFour', exercises.exerciseFour);


module.exports = router;