# Sanitary Document Management System

This project is a web application designed to automate document management in the sanitary department of a military unit. It utilizes the Model-View-Controller (MVC) architecture to ensure a clear separation of concerns, making the application easier to develop, test, and maintain.

## Features

- **User Authentication**: Secure login and registration for medical personnel.
- **Journal Management**: Create, read, update, and delete journal entries for various medical records.
- **Data Visualization**: Display journal entries in lists and tables with sorting and searching capabilities.
- **Audit Logging**: Track user actions for auditing purposes.

## Project Structure

```
sanitary-docs-app
├── src
│   ├── controllers          # Contains controllers for handling requests
│   ├── models               # Contains data models for the application
│   ├── routes               # Defines application routes
│   ├── views                # Contains view templates for rendering
│   ├── middlewares          # Middleware functions for request handling
│   ├── utils                # Utility functions for various tasks
│   ├── app.ts               # Entry point of the application
│   └── types                # TypeScript types and interfaces
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd sanitary-docs-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

- Access the application in your web browser at `http://localhost:3000`.
- Use the login page to authenticate and access the journal management features.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.