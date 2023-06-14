const ExpenseSchema = require('../models/ExpenseModel');


exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    console.log(expense);

    try {
        // To validate input fields
        if (!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields are required.'});
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be a positive number'});
        }
        await expense.save();
        res.status(200).json({message: 'Expense added successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const {id} = req.params;
        ExpenseSchema.findByIdAndDelete(id).then((expense) => {
            res.status(200).json({message: 'Expense deleted successfully'});
        });
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}