# E-Commerce

This is the README file for the E-commerce project, a full-stack application designed to facilitate online shopping. The project utilizes the React, Node.js, Express, and Mongoose stack to deliver a feature-rich and scalable e-commerce website with functionalities such as product listings, shopping cart management, user authentication, and order processing.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project follows a structured and modular approach to ensure maintainability and extensibility. Below is an overview of the main directories and files:

- **`Frontend`**: This directory contains the React frontend code for the e-commerce website. It includes components, pages and styles, files associated with the user interface.

- **`Server`**: The server directory contains the Node.js and Express backend code. It encompasses routes, controllers, models, and middleware responsible for handling API requests and implementing the business logic.

- **`Database`**: This directory includes the Mongoose schemas and models used for defining the data structure and interacting with the MongoDB database.

- **`src`**: This directory contains static assets such as images, stylesheets, and client-side JavaScript files.

- **`README.md`**: The main README file for the project.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ankit-Ransh/E-commerce.git`
2. Navigate to the project directory: `cd Ecommerce-React-Project`
3. Install the dependencies for the client and server:
   - For the client, run `cd Frontend/e-commerce-app && npm install`
   - For the server, run `cd /Backend/Server && npm install`
4. Create a `.env` file in the server directory and provide the necessary environment variables as specified in `.env.example`.
5. Set up a MongoDB database and update the database connection details in the `.env` file.
6. Run the server and client separately:
   - For the client, navigate to the e-commerce-app directory (`cd Frontend/e-commerce-app`) and run `npm start`.
   - For the database, navigate to the Backend directory (`cd Backend`) and run `mongod --dbpath "./Database"`.
   - For the server, navigate to the Server directory (`cd Backend/Server`) and run `npm index.js`.

## Usage

Once the project is set up and running, you can access the E-commerce website by visiting `http://localhost:3000` in your web browser. The homepage will display product listings, and you can explore different categories, add items to your cart, and proceed to checkout. User authentication is available for managing orders and accessing personalized features.

## Technologies Used

The project utilizes the following technologies and frameworks:

- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express**: A flexible and minimal web application framework for Node.js.
- **Mongoose**: An object data modeling (ODM) library for MongoDB and Node.js.
- **MongoDB**: A popular NoSQL database for storing application data.
- **HTML**: The standard markup language for creating web pages.
- **CSS**: A stylesheet language for styling HTML documents.
- **JavaScript**: A programming language for adding interactivity and functionality to

## Contributing

Contributions to the project are welcome! If you encounter any bugs, have suggestions for improvements, or would like to add new features, please open an issue or submit a pull request.

When contributing, please adhere to the existing code style, follow best practices, and ensure thorough testing of your changes.

## License

The project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial projects.


# Precautions
        If mongoose is suddenly shutting down then check if one of the program is already running:
                - ps aux | grep mongod 
                - pkill mongod
        This will kill the existing mongod running in the background.

# Overview of the project

## Login Page
<img width="1432" alt="Screenshot 2023-06-23 at 7 12 14 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/526a265c-e4e7-4bca-8274-b22e980ee919">

## Sign Up Page
<img width="1432" alt="Screenshot 2023-06-23 at 7 12 02 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/48335bea-0b25-4d70-960d-4659cbda92d9">

## Home Page
<img width="1431" alt="Screenshot 2023-06-23 at 7 14 17 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/4c8cff5c-d483-4c28-8134-805213fc6bca">

<img width="1431" alt="Screenshot 2023-06-23 at 7 14 32 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/e9ddea2e-8fa1-461f-a969-ca6d2939cf1b">

## Departments
<img width="1440" alt="Screenshot 2023-06-23 at 7 17 51 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/322180da-b9e3-4c04-bb78-ff0030539ab6">

<img width="1428" alt="Screenshot 2023-06-23 at 7 18 32 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/2621037b-e2a6-4319-9001-2478312930cf">

<img width="1440" alt="Screenshot 2023-06-23 at 7 18 46 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/626179e6-3818-430c-8d6d-b9beb5289023">

<img width="1440" alt="Screenshot 2023-06-23 at 7 19 02 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/b47d5534-9cd3-4e74-8d28-b123dd304b43">

## My Cart Section
<img width="1427" alt="Screenshot 2023-06-23 at 7 15 38 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/0cb6c987-2305-4428-a798-f7ceaea78db0">

## Product Overview
<img width="1428" alt="Screenshot 2023-06-23 at 7 15 49 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/5172cd03-cdf5-4aaa-aeb5-7da0809745ea">




