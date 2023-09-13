# User Management REST API

This is a simple User Management REST API built with Node.js, Express.js, and MongoDB. It allows you to create, read, update, and delete user records.

## Setup

Follow these steps to set up and run the application:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=<port-number>
   MONGOURI=<mongodb-connection-uri>
   ```

   Replace `<port-number>` with the desired port number (e.g., 5000) and `<mongodb-connection-uri>` with your MongoDB connection URI.

5. Start the application:

   ```bash
   npm start
   ```

   The application will start on the specified port, and you should see a message indicating that it is listening.

## API Endpoints

The following API endpoints are available:

- `POST /api/users`: Create a new user.
- `GET /api/users/:user_id`: Retrieve a user by ID.
- `PUT /api/users/:user_id`: Update a user's name by ID.
- `DELETE /api/users/:user_id`: Delete a user by ID.

## Example Usage

### Create a User

Send a POST request to `/api/users` with a JSON body containing the user data:

```json
{
  "name": "John Doe"
}
```

### Retrieve a User

Send a GET request to `/api/users/:user_id` to retrieve a user by their ID.

### Update a User

Send a PUT request to `/api/users/:user_id` with a JSON body containing the updated user data:

```json
{
  "name": "Jane Doe"
}
```

### Delete a User

Send a DELETE request to `/api/users/:user_id` to delete a user by their ID.

## Error Handling

The application includes error handling middleware to handle various error scenarios, such as invalid requests and database errors.

## Not Found

If you access an undefined route, you will receive a "Not Found" response.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This Express application template is released under the MIT License. Feel free to modify and use it for your own projects.
