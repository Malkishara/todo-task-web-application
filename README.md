# Todo Task Web Application

## Project Setup Guide

### Prerequisites

Before building the project, ensure that there are no applications running on the following ports:

3306 (Database)

5000 (Backend)

3000 (Frontend)

### Project Structure

The project consists of the following main folders:

database/ - Contains database-related files, including initialization scripts.

backend/ - The backend API built with Node.js.

frontend/ - The frontend application built with React.

docker-compose.yml - The Docker configuration file to run the project.

### Containers

The project uses three Docker containers:

database - MySQL database

backend - Node.js backend

frontend - React frontend

### Setup Instructions

1. Clone the repository
   
'https://github.com/Malkishara/todo-task-web-application.git'
'cd todo-task-web-application'

2. Build and start the Docker containers

  Run the following command to build and start the project:

  'docker-compose up --build'

3.  Access the Application

   Once the containers are up and running, open the following URL in your browser to view the application:

   'http://localhost:3000'

### Running Tests

#### Backend Tests

1. Unit Tests:

   'docker exec backend npm run test:unit'

2. Integration Tests:

   'docker exec backend npm run test:integration'

3.  End-to-End (E2E) Tests:

   'docker exec backend npm run test:e2e'

4. Test Coverage Report:

   'docker exec backend npm run test:coverage'
   
#### Frontend Tests

1. Unit Tests:

  'docker exec frontend npm test'

###  Stopping the Containers

To stop and remove the containers, run:

'docker-compose down'

  
### Additional Note

Ensure Docker is installed and running on your machine before proceeding.
