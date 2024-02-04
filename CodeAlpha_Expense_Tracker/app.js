document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpenses = document.getElementById('total-expenses');
    let expenses = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const description = document.getElementById('expense-description').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);

        if (description && amount) {
            const expense = { description, amount };
            addExpense(expense);
            updateTotal();
            updateLocalStorage();
            form.reset();
        } else {
            alert('Please fill out both fields.');
        }
    });

    expenseList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            const item = e.target.parentElement;
            const index = Array.from(item.parentElement.children).indexOf(item);
            expenses.splice(index, 1);
            item.remove();
            updateTotal();
            updateLocalStorage();
        } else if (e.target.classList.contains('edit-btn')) {
            const item = e.target.parentElement;
            const index = Array.from(item.parentElement.children).indexOf(item);
            editExpense(index);
        }
    });

    function addExpense(expense) {
        expenses.push(expense);
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.description}</span>
            <span>$${expense.amount.toFixed(2)}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        expenseList.appendChild(li);
    }

    function editExpense(index) {
        const item = expenseList.children[index];
        const description = item.querySelector('span').textContent;
        const amount = parseFloat(item.querySelector('span:nth-child(2)').textContent);
        document.getElementById('expense-description').value = description;
        document.getElementById('expense-amount').value = amount;
        item.remove();
        expenses.splice(index, 1);
        updateTotal();
        updateLocalStorage();
    }

    function updateTotal() {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalExpenses.textContent = `Total: $${total.toFixed(2)}`;
    }

    function updateLocalStorage() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function populateExpenseList() {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
        if (storedExpenses) {
            expenses = storedExpenses;
            expenses.forEach(expense => {
                addExpense(expense);
            });
            updateTotal();
        }
    }

    populateExpenseList();
});