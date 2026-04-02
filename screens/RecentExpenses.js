import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function RecentExpenses() {
    const { expenses } = useContext(ExpensesContext);

    const recentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return expense.date > date7DaysAgo && expense.date <= today;
    });

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod={"Last Seven Days"}
            fallbackText="No recent expenses registered in past 7 days." />
    );
}

export default RecentExpenses;