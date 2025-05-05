Here’s the complete **documentation** for your **Loan Calculator App** built with **React** and **Material UI**, covering everything from the project overview to setup, architecture, features, and deployment.

---

# 📘 Loan Calculator App Documentation

## 📌 Overview

The **Loan Calculator App** is a responsive web application built with **React JS**, **Material UI**, and **ExchangeRate API**. It allows users to:

* Calculate **EMI** (Equated Monthly Installment)
* View a detailed **amortization schedule**
* Convert EMI values into multiple currencies using **real-time exchange rates**
* Switch between **light** and **dark** themes
* Navigate easily with **React Router**
* Get feedback on invalid routes with a **404 Error Page**

---

## 🏗️ Project Structure

```
loan-calculator-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── CalculatorForm.js
│   │   ├── EMIResult.js
│   │   ├── CurrencySelector.js
│   │   ├── AmortizationTable.js
│   │   └── Header.js
│   │
│   ├── context/
│   │   ├── ThemeContext.js
│   │   └── CurrencyContext.js
│   │
│   ├── hooks/
│   │   ├── useEMICalculator.js
│   │   └── useExchangeRates.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── ExchangeRates.js
│   │   └── ErrorPage.js
│
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── theme.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Prerequisites

Ensure Node.js and npm are installed:

```bash
node -v
npm -v
```

### 2. Clone & Navigate

```bash
git clone https://github.com/your-username/loan-calculator-app.git
cd loan-calculator-app
```

### 3. Install Dependencies

```bash
npm install
```

If needed, install manually:

```bash
npm install @mui/material @emotion/react @emotion/styled axios react-router-dom @mui/icons-material
```

### 4. Add Environment Variable

Create a `.env` file in the root:

```bash
REACT_APP_EXCHANGE_API_KEY=your_actual_api_key_here
```

👉 Get your free API key from [https://www.exchangerate-api.com](https://www.exchangerate-api.com)

### 5. Run Locally

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 🌟 Features

| Feature               | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| EMI Calculation       | Calculates monthly payment based on principal, interest rate, and term |
| Amortization Schedule | Displays a month-by-month breakdown of payments                        |
| Currency Conversion   | Converts EMI value into 160+ currencies using ExchangeRate API         |
| Theme Switcher        | Toggle between light and dark modes                                    |
| Routing               | Navigate between pages with React Router                               |
| Error Handling        | Custom 404 page and fallback UI                                        |

---

## 🧠 Core Concepts

### 📦 Context API

* `ThemeContext.js` – Controls dark/light theme
* `CurrencyContext.js` – Manages selected currency and exchange rates

### 🧩 Custom Hooks

* `useEMICalculator.js` – Calculates EMI & amortization
* `useExchangeRates.js` – Fetches exchange rates on load

---

## 💡 Example Flow

1. User enters loan details
2. App calculates EMI and shows the result
3. Real-time exchange rates convert EMI to selected currency
4. Schedule shows monthly principal & interest payments
5. User switches theme or navigates to About/ExchangeRates



## 📄 Sample Scripts

### package.json

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

---

## 🔍 Screenshots

You can include screenshots of:

* EMI calculator UI
* Currency dropdown
* Theme switch
* Amortization table
* Exchange rate page

---

## 📘 Future Improvements

* PDF export of EMI schedule
* User login & history tracking
* Charts (e.g., Pie chart for interest vs principal)
* Responsive UI enhancements

---

## 🤝 Contribution

Pull requests are welcome! Please open an issue first to discuss what you would like to change.

---

## 📬 Contact

Have feedback or questions? Reach out at \[[siddharthasiddhu036@example.com]]

---

