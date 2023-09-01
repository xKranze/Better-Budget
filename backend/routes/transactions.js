const { addExpense, getExpense, deleteIExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncomes } = require('../controllers/income');

const router = require('express').Router();



router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    //delete request using get id for params
    .delete('/delete-income/:id', deleteIncomes)

    //get the addExpense function
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    //delete request using get id for params
    .delete('/delete-expense/:id', deleteIExpense)

module.exports = router