# node-react-auth-dynamodb
### `NOTE: this is a snippet from an internal project I am working on`
### Open sourcing the authentication system I wrote to work with React as the frontend, NodeJS as the backend, using Google Auth

## To Run Locally:
### 1. Clone the repository
### 2. Navigate to the `frontend` folder
### 3. Run `npm install`
### 4. Open the file located at `./pages/login` and update the clientid with your project's Google Client Id. To set it up, see https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
### 5. Navigate to the `backend` folder
### 6. Run `npm install`
### 7. Fill in your respective environment variables in the `.env` file
### 8. In two separate terminals, navigate to the `frontend` and `backend` folders respectively
### 9. In each folder, run `npm run start`
### 10. Open the `localhost` page for the frontend via the frontend code

## Notes:
### This tool requires that you have an AWS DynamoDB project running, and have a table created to allow for users. It will need to have `email` set as the primary/partition key. Everything else can be default settings. You will need to set the table name in the `./backend/models/user.model.js` file.