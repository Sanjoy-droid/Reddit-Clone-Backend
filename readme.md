# Reddit Backend Clone

## Overview

This repository contains the backend code for a Reddit clone, implemented using Node.js, Express, and MongoDB. It provides RESTful API endpoints for user authentication, posts, and other features required for the Reddit clone application.

## Features

User Authentication: Implement user authentication functionalities, including sign up, log in, log out, and token-based authentication using JSON Web Tokens (JWT).

Post Management: Define API routes for creating, updating, deleting, and fetching posts, enabling users to interact with posts and comments within the application.

Data Persistence: Connect to a MongoDB database to store user data, post content, and other relevant information, ensuring data integrity and persistence across server restarts.

Validation and Error Handling: Utilize Express.js middleware for request validation and error handling, ensuring robustness and security in API interactions.

Cross-Origin Resource Sharing (CORS): Enable CORS middleware to allow cross-origin requests from the frontend application, facilitating communication between the client and server.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Sanjoy-droid/Reddit-Clone-Backend.git

   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Create .env file:**

```bash
PORT=5000
MONGOURI=<your_mongodb_connection_uri>
JWT_SECRET=<your_secret_enviroment_variable>
```

2. **Start the development server:**

   ```bash
   nodemon index
   ```

3. **Access the API:**

   The API will be available at http://localhost:5000/api.

**API Endpoints**
POST "/api/auth/createuser" Register a new user.
POST "/api/auth/login" Log in anexisting user.
POST "/api/auth/getuser" Get detailsof an existing user.
POST "/api/auth/testlogin" Login as aTest User.

     POST "/api/posts/addpost" Add post.
     POST "/api/posts/fetchallposts" Get all posts.
     POST "/upvote/:id" Upvote Post
     POST "/downvote/:id" Downvote Post
     POST "/updatepost/:id" Update Post

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Disclaimer

This Reddit Clone project is created for educational purposes, aiming to showcase skills in web development and React programming. It is not an official Reddit product, and all credits for the original Reddit platform go to the dedicated team at Reddit. The use of the term "Reddit" is for descriptive purposes only.

This project is not intended for commercial use or to imply any official association with Reddit. All trademarks, registered trademarks, and service marks mentioned herein are the property of their respective owners.
