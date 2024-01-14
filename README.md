# E-Commerce

This is the README file for the E-commerce project, a full-stack application designed to facilitate online shopping. The project utilizes various technologies and frameworks to deliver a feature-rich and scalable e-commerce website with functionalities such as product listings, shopping cart management, user authentication, order processing, payment integration, email notifications, password encryption, and web token authentication.

## Project Structure

The project follows a structured and modular approach to ensure maintainability and extensibility. Below is an overview of the main directories and files:

- **`Frontend`**: This directory contains the React frontend code for the e-commerce website. It includes components, pages, styles, and files associated with the user interface.

- **`Server`**: The server directory contains the Node.js and Express backend code. It encompasses routes, services, models, and middleware responsible for handling API requests and implementing the business logic.

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
6. Install the necessary dependencies, navigate to the Server directory and run `npm i express jwt ejs nodemailer bcrypt path mongoose stripe dotenv cors body-parser nodemon`
7. Run the server and client separately:
   - For the client, navigate to the e-commerce-app directory (`cd Frontend/e-commerce-app`) and run `npm start`.
   - For the database, navigate to the Backend directory (`cd Backend`) and run `mongod --dbpath "./Database"`.
   - For the server, navigate to the Server directory (`cd Backend/Server`) and run `nodemon index.js`.
   - Setup the stripe server, navigate to the Server directory (`cd Backend/Server`) and run `stripe login`
   - For the payment, navigate to the Server directory (`cd Backend/Server`) and run `stripe listen --forward-to localhost:portNumber/webhook/webhook`.
   - Now connect the webhook, navigate to the Server directory (`cd Backend/Server`) and run `stripe trigger payment_intent.succeeded`

  
## Usage

Once the project is set up and running, you can access the E-commerce website by visiting `http://localhost:3000` in your web browser. The homepage will display product listings, and you can explore different categories, add items to your cart, and proceed to checkout. User authentication is available for managing orders and accessing personalized features.

## Technologies Used

The project utilizes the following technologies and frameworks:

- **HTML**: The standard markup language for creating web pages.
- **CSS**: A stylesheet language for styling HTML documents.
- **JavaScript**: A programming language for adding interactivity and functionality to web pages.
- **Bootstrap**: A popular CSS framework for building responsive and mobile-first websites.
- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express**: A flexible and minimal web application framework for Node.js.
- **EJS**: A templating engine for generating dynamic HTML pages.
- **Mongoose**: An object data modeling (ODM) library for MongoDB and Node.js.
- **MongoDB**: A popular NoSQL database for storing application data.
- **Stripe**: A payment processing platform for securely handling online transactions.
- **Nodemailer**: A module for sending email notifications from Node.js applications.
- **bcrypt**: A library for password hashing and encryption.
- **JWT**: JSON Web Tokens for secure authentication and authorization.

## Overview of the project

**Sign Up**
<img width="1207" alt="Screenshot 2023-07-01 at 10 00 08 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/4aa1d50b-9564-497e-8e34-d1f4bbd89b40">

**Login**
<img width="1292" alt="Screenshot 2023-07-01 at 10 00 19 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/1b65ef6a-fe28-4f88-a177-0347215fe33e">

**Forgot Password**
<img width="1284" alt="Screenshot 2023-07-01 at 10 00 33 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/cf0b387d-c029-4770-99b3-ca926e46a221">

**Main Page**
<img width="1423" alt="Screenshot 2023-07-01 at 9 24 32 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/897610a2-e327-49fe-8c8a-592f43481857">


**Department**
<img width="1389" alt="Screenshot 2023-07-01 at 9 24 55 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/6c296ec0-bfe2-48e7-9755-057a3fa89bac">

**Products**
<img width="1402" alt="Screenshot 2023-07-01 at 9 26 02 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/25ce0456-7041-498b-884d-95706b2c1da1">

<img width="1397" alt="Screenshot 2023-07-01 at 9 25 29 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/fea0df5a-a022-4f1d-86eb-d22673829db7">

<img width="1407" alt="Screenshot 2023-07-01 at 9 26 19 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/1318256c-e9ef-4362-9074-4374d65c7105">

<img width="1412" alt="Screenshot 2023-07-01 at 9 27 18 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/e8edc6e7-7bec-49f3-b97d-2b7b78d44dba">

**Update Profile**
<img width="1407" alt="Screenshot 2023-07-01 at 9 31 17 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/18cd5681-35c1-4324-9b1c-fdc7b7a95c4a">


**Order Preview**
<img width="1375" alt="Screenshot 2023-07-01 at 9 27 35 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/0c57ddb0-d639-4a99-86cb-ae6628fbf587">

**My Cart**
<img width="1405" alt="Screenshot 2023-07-01 at 9 28 06 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/67daf4e9-3c60-4704-b177-2b6f07d67d74">

**My Orders**
<img width="1392" alt="Screenshot 2023-07-01 at 9 31 36 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/82ee1325-0889-4a52-aa40-be34ec049303">

**Payment**
<img width="1397" alt="Screenshot 2023-07-01 at 9 28 47 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/372103a4-e666-4f18-822a-ccf95dd875c0">

**Successful Payment**
<img width="1378" alt="Screenshot 2023-07-01 at 9 29 48 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/54353d0b-518f-49f5-8ef9-c7d0a193b4e6">

**Order Summary**
<img width="1332" alt="Screenshot 2023-07-04 at 3 24 37 PM" src="https://github.com/Ankit-Ransh/E-commerce/assets/98517507/4f79f2b1-2663-4cc4-9080-7d1ffa3ad922">

## Precaution
If mongoose is shutting down, run `pkill mongod`
Whenever change the domain make sure to edit ejs file in Backend/Server/Views.

## Contributing

Contributions to the project are welcome! If you encounter any bugs, have suggestions for improvements, or would like to add new features, please open an issue or submit a pull request.

When contributing, please adhere to the existing code style, follow best practices, and ensure thorough testing of your changes.
