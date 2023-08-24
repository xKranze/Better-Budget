const IncomeSchema = require("../models/incomeModel")

//ADD income
exports.addIncome = async (req, res) => {
    // console.log(req.body);
    //Destructuring the .body data by doing the following
    const { title, amount, category, description, date } = req.body

    //create an instance of data above into incomeSchema from models.  use the schema to create instances of income records.
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    // console.log(income)

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields need too be filled and are required!' })
        }
        //if amount is less than or equal to 0 or not a number.
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'The amount must be a positive number!' })
        }
        //save income instance to DB
        await income.save()
        res.status(200).json({ message: 'Income added!$$$' })
    } catch (error) {
        res.status(500).json({ message: 'ERROR Invalid Data!' })
    }
    console.log(income)
}

//GET Income
exports.getIncomes = async (req, res) =>{
    try {
        //Fetch all records from the IncomeSchema collection and sorts them based on the createdAt field in descending order,  This will sort last created item and sort to the top of list, by default last created item will be at bottom of list. Meaning that the newest records will appear at the beginning of the incomes array.
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'ERROR Invalid Data!'})
    }
}


//DELETE Income by id
exports.deleteIncomes = async (req, res) =>{
   const {id} = req.params;
   IncomeSchema.findByIdAndDelete(id)
   .then((income) =>{
    res.status(200).json({message: 'Income successfully deleted!'})
   })
   .catch((err) =>{
    res.status(500).json({message: 'ERROR Invalid Data!'})
   }) 
}
