
const form = document.getElementById("transactionForm");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");

const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expenses");
const balanceElement = document.getElementById("balance");

const transactionList = document.getElementById("transactionList");
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");
const exportBtn = document.getElementById("exportBtn");

let transactions = JSON.parse(
  localStorage.getItem("financeTransactions") || "[]"
);

let expenseChart = null;

function saveData() {
  localStorage.setItem(
    "financeTransactions",
    JSON.stringify(transactions)
  );
}

function formatMoney(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);
  const type = typeInput.value;

  if (!title || !Number.isFinite(amount) || amount <= 0) {
    alert("Please enter valid transaction details.");
    return;
  }

  const transaction = {
    id: Date.now() + Math.random(),
    title: title,
    amount: amount,
    type: type,
    date: new Date().toISOString()
  };

  transactions.unshift(transaction);

  saveData();
  form.reset();
  updateDashboard();
});

function updateDashboard() {
  const income = transactions
    .filter(item => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expenses = transactions
    .filter(item => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  incomeElement.textContent = formatMoney(income);
  expenseElement.textContent = formatMoney(expenses);
  balanceElement.textContent = formatMoney(income - expenses);

  displayTransactions();
  updateChart();
}

function displayTransactions() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedType = filterType.value;

  const filtered = transactions.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchText);
    const matchesType =
      selectedType === "all" || item.type === selectedType;

    return matchesSearch && matchesType;
  });

  transactionList.replaceChildren();

  if (filtered.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "No matching transactions found.";
    transactionList.appendChild(message);
    return;
  }

  filtered.forEach(item => {
    const row = document.createElement("div");
    row.className = "transaction-item";

    const info = document.createElement("div");
    info.className = "transaction-info";

    const name = document.createElement("p");
    name.textContent = item.title;

    const date = document.createElement("small");
    date.textContent = new Date(item.date).toLocaleDateString("en-IN");

    info.append(name, date);

    const right = document.createElement("div");
    right.className = "transaction-right";

    const amount = document.createElement("strong");
    const isIncome = item.type === "income";

    amount.className = isIncome ? "income-text" : "expense-text";
    amount.textContent =
      (isIncome ? "+ " : "- ") + formatMoney(item.amount);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function() {
      transactions = transactions.filter(
        transaction => transaction.id !== item.id
      );

      saveData();
      updateDashboard();
    });

    right.append(amount, deleteButton);
    row.append(info, right);
    transactionList.appendChild(row);
  });
}

searchInput.addEventListener("input", displayTransactions);
filterType.addEventListener("change", displayTransactions);

function updateChart() {
  const canvas = document.getElementById("expenseChart");

  if (typeof Chart === "undefined") {
    return;
  }

  const labels = [];
  const values = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() - i);

    const month = date.toLocaleString("en-IN", {
      month: "short",
      year: "2-digit"
    });

    labels.push(month);

    const total = transactions
      .filter(item => {
        if (item.type !== "expense") return false;

        const transactionDate = new Date(item.date);

        return (
          transactionDate.getMonth() === date.getMonth() &&
          transactionDate.getFullYear() === date.getFullYear()
        );
      })
      .reduce((sum, item) => sum + item.amount, 0);

    values.push(total);
  }

  if (expenseChart) {
    expenseChart.destroy();
  }

  expenseChart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Monthly Expenses",
        data: values,
        backgroundColor: "#8b6cf0",
        borderRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "#ffffff" }
        }
      },
      scales: {
        x: {
          ticks: { color: "#aab3c9" },
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#aab3c9" },
          grid: { color: "#29334d" }
        }
      }
    }
  });
}

exportBtn.addEventListener("click", function() {
  if (transactions.length === 0) {
    alert("No transactions available to export.");
    return;
  }

  const rows = [
    ["Transaction Name", "Amount", "Type", "Date"],
    ...transactions.map(item => [
      item.title,
      item.amount,
      item.type,
      new Date(item.date).toLocaleDateString("en-IN")
    ])
  ];

  const csv = rows.map(row =>
    row.map(value =>
      '"' + String(value).replace(/"/g, '""') + '"'
    ).join(",")
  ).join("\n");

  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "finance-transactions.csv";
  link.click();

  URL.revokeObjectURL(url);
});

updateDashboard();
