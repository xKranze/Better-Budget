const IncomeSchema= require("../models/incomeModel")


exports.addIncome = async (req, res) => {
    // console.log(req.body);
    //Destructuring the .body data by doing the following
    const {title, amount, category, description, date}  = req.body

    //create an instance of data above into incomeSchema from models
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    console.log(income)
}
