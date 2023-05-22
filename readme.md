# Assement Documentation

This documentation provides instructions on how to start and configure the fullstack application with a React frontend and an Express backend. It also covers how to set up environment variables and run tests for both the frontend and backend.

## Prerequisites

Before starting, ensure that you have the following installed on your machine:

- Node.js: The latest LTS version of Node.js should be installed.
- NPM: The Node Package Manager (NPM) comes bundled with Node.js.
- MongoDB : The Database to be used
- Node.js (v14 or higher) should be installed on your machine.


## Getting Started

To run the application locally, follow the instructions below.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/SheyiB/Iwosan.git
   cd Iwosan
    ```

## Frontend Setup

Follow these steps to set up and run the React frontend:

1. Navigate to the `frontend` directory of your project:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `frontend` directory.
   - Define your environment variables in the `.env` file. For example:
     ```
     REACT_APP_API_URL=http://localhost:8080/api/v1
     REACT_APP_API_KEY=RWSH@*VY8S2BUI2277211
     ```


4. Start the development server:
   ```
   npm start
   ```

   This will start the React development server and open your application in a web browser on  localhost:3000

## Backend Setup

Follow these steps to set up and run the Express backend:

1. Navigate to the `backend` directory of your project:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Define your environment variables in the `.env` file. For example:
     ```
     MONGODB_URI=mongodb://127.0.0.1:27017/PatientAPI
     PORT=8080
     SECRETKEY=YourSeccretKey
     JWT_EXPIRE=30d
     ```

4. Start the backend server:
   ```
   npm start
   ```

   This will start the Express server and make it accessible at the specified port.

## Running Tests

To run tests for both the frontend and backend, follow these steps:

### Frontend Tests

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Run tests:
   ```
   npm test
   ```

   This command executes the tests defined in your frontend code using the testing framework.

### Backend Tests

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Run tests:
   ```
   npm test
   ```

   This command executes the tests defined in your backend code using the testing framework.
   
## Conclusion

Thank you