const { addIncome, getIncomes, deleteIncomes } = require('../controllers/income');

const router = require('express').Router();



router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    //delete request using get id for params
    .delete('/delete-income/:id', deleteIncomes)
module.exports = router