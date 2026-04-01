import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
    return (
        <ExpensesOutput expensesPeriod={"Last Seven Days"}/>
    );
}

export default RecentExpenses;