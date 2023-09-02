const ExpenseSchema = require("../models/ExpenseModel")

//ADD income
exports.addExpense = async (req, res) => {
    // console.log(req.body);
    //Destructuring the .body data by doing the following
    const { title, amount, category, description, date } = req.body

    //create an instance of data above into expenseSchema from models.  use the schema to create instances of expense records.
    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    // console.log(expense)

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields need too be filled and are required!' })
        }
        //if amount is less than or equal to 0 or not a number.
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'The amount must be a positive number!' })
        }
        //save expense instance to DB
        await expense.save()
        res.status(200).json({ message: 'Expense added!$$$' })
    } catch (error) {
        res.status(500).json({ message: 'ERROR Invalid Data!' })
    }
    console.log(expense)
}

//GET expense
exports.getExpense = async (req, res) =>{
    //Fetch all records from the ExpenseSchema collection and sorts them based on the createdAt field in descending order,  This will sort last created item and sort to the top of list, by default last created item will be at bottom of list. Meaning that the newest records will appear at the beginning of the incomes array.
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'ERROR Invalid Data!'})
    }
}


//DELETE expense by id
exports.deleteIExpense = async (req, res) =>{
   const {id} = req.params;
//    console.log(req.params);
ExpenseSchema.findByIdAndDelete(id)
   .then((income) =>{
    res.status(200).json({message: 'Expense successfully deleted!'})
   })
   .catch((err) =>{
    res.status(500).json({message: 'ERROR Invalid Data!'})
   }) 
}
