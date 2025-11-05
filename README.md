# 🥤 Drinks4Students

**Drinks4Students** is a simple Node.js web application that showcases a drinks shop for students.  
It demonstrates routing, form handling, and dynamic EJS rendering with data stored in JavaScript objects.

---

## 🚀 Project Overview

The application allows users to:
- View available drink categories  
- Learn about shop locations and managers  
- Search for drinks by name and category  
- Register with their details  
- Complete a short survey and view their responses  

The app uses **Express.js** for routing, **EJS** for templating, and **CSS** for styling.

---

## 🧩 Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS (Embedded JavaScript templates), HTML, CSS  
- **Templating Engine:** EJS  
- **Middleware:** express.urlencoded() for form handling  

---

## 📂 Folder Structure

```
Drinks4Students/
│
├── public/
│   └── styles.css             # External CSS file
│
├── views/
│   ├── index.ejs              # Home page - lists drink categories
│   ├── about.ejs              # About page - shows stores and managers
│   ├── search.ejs             # Search form page
│   ├── search_result.ejs      # Displays search results (WIP)
│   ├── register.ejs           # Registration form
│   ├── registered.ejs         # Confirmation message after registering
│   ├── survey_access.ejs      # Page to enter name/email before survey
│   ├── survey.ejs             # Survey page with 3 questions
│   └── survey_results.ejs     # Displays user responses
│
├── routes/
│   └── main.js               # All route definitions
│
├── index.js                    # Main app setup (Express server)
└── package.json

```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Drinks4Students.git
cd Drinks4Students
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
node main.js
```

Then open **http://localhost:8000** in your browser.

---

## 🧭 Routes Overview

| Route | Method | Description |
|--------|--------|-------------|
| `/` | GET | Displays the home page with a list of drink categories. |
| `/about` | GET | Lists all stores, showing each manager’s name and location. |
| `/search` | GET | Provides a form where users can input a drink name and category. |
| `/search_result` | POST | (WIP) Returns a message showing what the user searched for. |
| `/register` | GET | Displays a registration form (first name, last name, email). |
| `/registered` | POST | Displays a confirmation message with the user’s name and email. |
| `/survey_access` | GET | Allows users to enter basic info before accessing the survey. |
| `/survey` | POST | Displays a 3-question survey form. |
| `/survey_results` | POST | Displays the user’s submitted survey responses. |

---

## 🧃 Sample Data (shopData)

```js
var shopData = {shopName: "Drinks4Students",
                productCategories: ["Soft Drinks", "Juices", "Water", "Energy Drinks", "Hot Drinks"],
                products: [
                    {name: "Coca Cola", category: "Soft Drinks", price: 1.50},
                    {name: "Pepsi", category: "Soft Drinks", price: 1.40},
                    {name: "Orange Juice", category: "Juices", price: 2.00},
                    {name: "Apple Juice", category: "Juices", price: 2.10},
                    {name: "Mineral Water", category: "Water", price: 1.00},
                    {name: "Sparkling Water", category: "Water", price: 1.20},
                    {name: "Red Bull", category: "Energy Drinks", price: 2.50},
                    {name: "Monster", category: "Energy Drinks", price: 2.60},
                    {name: "Coffee", category: "Hot Drinks", price: 1.80},
                    {name: "Tea", category: "Hot Drinks", price: 1.50}
                ],
                shops: [
                    {manager: "Alice Smith", location: "London"},
                    {manager: "Bob Johnson", location: "Manchester"},
                    {manager: "Charlie Brown", location: "Birmingham"},
                    {manager: "Diana Prince", location: "Leeds"},
                    {manager: "Ethan Hunt", location: "Glasgow"}
                ]
};
```

---

## 🧠 Future Improvements

- Complete `/search_result` to show filtered drink results  
- Add individual product detail pages  
- Connect to a database (e.g. MongoDB) for persistent storage  
- Add user authentication for registration and survey responses  
- Improve front-end styling and responsiveness  

---

## 👨‍💻 Author

Developed by **Yasin Ahmed**  
University coursework project — *Demonstrating Express.js routing, EJS templating, and form handling.*
