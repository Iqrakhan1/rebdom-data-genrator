# Random Employee Data Generator

## Description

This project is a simple **random employee data generator** that stores data in a **MongoDB** database and provides an API to retrieve and display the data. The backend is built using **Express**, **Mongoose**, and **Node.js**, while the frontend is a basic HTML file that fetches and displays employee data from the backend.

### Features:

- Generate random employee data using express logic library.
- Store generated employee data in a MongoDB database.
- Retrieve and display employee data through an API endpoint.
- Basic frontend for displaying the employee data.

### Folder Details:

- **config**: Configuration files for the project (if any).
- **models**: Contains the Mongoose schema for the Employee model.
- **src**: Frontend files, including HTML and CSS.
- **.gitignore**: Gitignore file to exclude unnecessary files from version control.
- **index.js**: The main entry point of the application.
- **package.json**: The Node.js package configuration file.
- **readme.md**: This file.
- **tailwind.config.js**: Tailwind CSS configuration file.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You can use a local MongoDB server or a cloud-based solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation

1. **Clone the repository**:
   Clone the repository from GitHub and navigate to the project folder:

   ```bash
   git clone https://github.com/Iqrakhan1/rebdom-data-genrator.git
   cd rebdom-data-genrator
   ```

2. **Install dependencies**: Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start MongoDB (if using a local instance)**:
   Ensure MongoDB is running locally, or use a cloud-based database (such as MongoDB Atlas).

4. **Start the backend server**:
   Start the server using `nodemon` for automatic reloading during development. Run the following command:

   ```bash
   npm run dev
   ```

   The backend server will be running at `http://localhost:3000`.

### Usage

- **Generate Random Employees**: To generate random employee data and store it in the database, visit the following URL:

  ```
  http://localhost:3000/employee
  ```

- **Frontend**: The frontend (`index.html`) fetches employee data from the `/employee` endpoint and displays it in a list. To see the employee data, open:
  ```
  http://localhost:3000
  ```

## Technologies Used

- **Node.js**: JavaScript runtime used for the backend.
- **Express**: Web framework used to build the backend API.
- **Mongoose**: MongoDB object modeling tool for interacting with the database.
- **Faker.js**: Library used to generate random employee data.
- **Tailwind CSS**: Utility-first CSS framework used for styling the frontend.

## Scripts

- **Start the development server with nodemon**:
  The `dev` script runs the backend server with automatic reloading whenever you make changes:

  ```bash
  npm run dev
  ```

- **Generate random employee data**:
  The backend route `/employee` will generate and insert random employee records into the database.

## Sample Data Structure

Each employee record will have the following structure:

```json
{
  "name": "John Doe",
  "position": "Software Engineer",
  "email": "john.doe@example.com",
  "phone": "+1 (123) 456-7890"
}
```

- **name**: The name of the employee.
- **position**: The employee's job title or position.
- **email**: A randomly generated email address.
- **phone**: A randomly generated phone number.

## Running the Application

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the MongoDB server (if you're running it locally).
4. Start the backend server by running `npm run dev`.
5. Open your browser and navigate to `http://localhost:3000` to view the employee data.

## License

This project is licensed under the **MIT License**.

## Acknowledgements

- [Express.js](https://expressjs.com/) for building the backend.
- [Mongoose](https://mongoosejs.com/) for MongoDB object modeling.
- [Tailwind CSS](https://tailwindcss.com/) for styling the frontend.
