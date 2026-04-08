import axios from 'axios';

const BACKEND_URL = 'https://rnexpensesummary-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
    // fetch('https://rn-expense-tracker-app-default-rtdb.firebaseio.com/expenses.json', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(expenseData)
    // });
    const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    // const response = await fetch('https://rn-expense-tracker-app-default-rtdb.firebaseio.com/expenses.json');
    // const data = await response.json();

    // const expenses = [];
    // for (const key in data) {
    //     const expenseObj = {
    //         id: key,
    //         description: data[key].description,
    //         amount: data[key].amount,
    //         date: new Date(data[key].date)
    //     };
    //     expenses.push(expenseObj);
    // }
    // return expenses;
    const response = await axios.get(BACKEND_URL + '/expenses.json');
    //console.log(response.data);
    const expenses = [];
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            description: response.data[key].description,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date)
        };
        expenses.push(expenseObj);
    }
    return expenses;
}

export function updateExpense(id, expenseData) {
    // fetch(`https://rn-expense-tracker-app-default-rtdb.firebaseio.com/expenses/${id}.json`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(expenseData)
    // });
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
    // fetch(`https://rn-expense-tracker-app-default-rtdb.firebaseio.com/expenses/${id}.json`, {
    //     method: 'DELETE'
    // });
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}