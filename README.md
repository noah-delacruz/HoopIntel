# HoopIntel

HoopIntel is a prototype application that allows users to search for NBA players by name and view detailed information about them using the balldontlie API (https://www.balldontlie.io/). This project demonstrates a unit-tested full-stack implementation using React for the frontend and Express for the backend, styled with Material UI.

---

## 📋 Features

-   Search for NBA players by name.
-   View up to 10 search results at a time with pagination.
-   Display player details such as height, weight, draft year, and college.
-   Mark/unmark players as favorites, with changes persisted using local storage.

---

## 🛠️ Tech Stack

### Backend

-   **Express** - Backend framework.
-   **balldontlie API** - External API for NBA player data.
-   **Jest + Supertest** - For backend unit testing.

### Frontend

-   **React** - Frontend framework.
-   **Material UI** - Styling.
-   **Vitest + React Testing Library** - For frontend unit testing.

### Deployment

-   **Backend** - Deployed on Render.
-   **Frontend** - Deployed on Vercel.

---

## 🚀 Setup and Installation

### Prerequisites

-   Node.js installed.
-   An API key from the balldontlie API.

### Steps to Run Locally

1. **Clone the repository:**

    ```bash
    git clone https://github.com/noah-delacruz/HoopIntel/
    ```

2. **Backend Setup:**

    - Navigate to the backend directory:
        ```bash
        cd backend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Create a `.env` file and add your balldontlie API key:
        ```env
        API_KEY=your_api_key_here
        ```
    - Start the backend server:
        ```bash
        npm run start
        ```

3. **Frontend Setup:**
    - Open a new terminal and navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the development server:
        ```bash
        npm run dev
        ```

## 🧪 Testing

### Backend

-   Run backend tests with:
    ```bash
    npm run test
    ```

### Frontend

-   Run frontend tests with:
    ```bash
    npm run test
    ```

---

## 📈 Future Improvements

-   Persist user choices using a backend database instead of local storage.
-   Implement authentication for user accounts.

---

## 📝 License

This project is licensed under the MIT License.

---

Feel free to reach out if you have any questions or suggestions for improvement!
