
EVRHNG Store — React + Vite Project
This project is a React + Vite web application that displays different types of products from an external API. It demonstrates core React concepts including components, props, event handling, hooks, and API integration. The app fetches real product data from an API, displays it in a responsive layout, allows users to search by product name, and handles loading and error states.
The application is structured into reusable components: App.jsx (main logic and data management), ProductList.jsx (renders all products), ProductCard.jsx (displays individual product details), and SearchBar.jsx (input for filtering products). Data and functions are passed between components using props to ensure clean and modular design.

Multiple events are handled throughout the app. The onChange event in the search bar filters products dynamically, while onClick events can trigger new API requests or UI updates. All interactions update React state properly using useState, without any direct DOM manipulation.

The project integrates external data through the Fetch API. The request is managed inside useEffect with an appropriate dependency array, ensuring data is fetched on mount and not repeatedly. The UI reflects three possible states: loading (while fetching), error (if something fails), and success (when products are displayed).

Hooks are used to manage logic and side effects. useState stores values such as the product list, search input, loading, and error states. useEffect handles fetching data from the API and re-runs automatically if dependencies change. This ensures a dynamic and reactive user interface.

The project satisfies all grading requirements:

Basic React and Components — structured into multiple components with clear separation of logic and presentation. Props are used correctly to pass data.
Event Handling — multiple events handled (click, input), updating state cleanly.
API Fetch Integration — uses a live API, displays data, and handles loading/error states.
Hooks: useState & useEffect — manages state and side effects correctly.
Technologies used: React (Vite), JavaScript (ES6+), CSS, and the Fetch API.
Setup and Run Instructions:

Run npm create vite@latest evrhng-store --template react
Navigate to the project folder: cd evrhng-store
Install dependencies: npm install
Start the development server: npm run dev
Open the local URL shown in the terminal to view the working application.
