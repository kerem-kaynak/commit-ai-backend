# Commit AI
## What is Commit AI?

Commit AI is a flashcard learning application that ironically has nothing to do with AI at its current state. With Commit AI, you can:

- Create new decks and name them
- Create new flashcards with a question on the front and an answer on the back
- Delete and edit your flashcards
- View decks and flashcards to "commit" knowledge into long term memory

## Architecture

Commit AI consists of two repositories: the backend and the frontend. The frontend is built with Vite + VueJS and TailwindCSS. The frontend also consists of a VueX Store and is hosted on Firebase. The backend is built with Fastify & NodeJS. It's also containerized with Docker and hosted on GCP via Cloud Run.

Here's the architecture diagram:
![Commit AI architecture diagram](https://www.linkpicture.com/q/commitai.drawio-2.png)
## Set up a local development environment

To run and develop Commit AI locally:

 1. Clone the repositories.
 ```
 git clone https://github.com/kerem-kaynak/commit-ai-frontend.git && git clone https://github.com/kerem-kaynak/commit-ai-backend.git
 ```
 2. Install all dependencies **for both repos**.
 ```
 npm install
 ```
 3. Copy the service account credentials file **for both repos**.
 ```
 cp serviceAccountCreds.json commit-ai-backend &&  cp serviceAccountCreds.json commit-ai-backend
 ```
 4. Copy the .env file for backend.
 ```
 cp .env commit-ai-backend
 ```
 5. Change into directory for the repo you want to run.
 ```
 cd commit-ai-frontend 
 ```
 OR 
 ```
 cd commit-ai-backend>
 ```
 6. Run the applications locally (same for frontend and backend).
```
npm run dev
```
## Access Commit AI in production (Currently down-ish)

Commit AI is deployed and live at https://app.commit-ai.com

## For assessment purposes...
Here's the .env file (does not contain any secrets) for the backend repository:
```
GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountCreds.json
GOOGLE_CLOUD_PROJECT=commit-ai
```
