# Capstone: Echoes of Home
## Project description
Echoes of Home is a React Web App built using the MERN stack. It is targeted at giving Seniors a 'voice' by connecting senior voice talents to individuals looking for niche voices. The web app will eventually be a platform to connect people on meaningful audio projects, ranging from audiobook tranlations that preserve 'lost' languages/dialects to personal voice messages that commemorate loved ones.

### API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/talents | Get list of all talents in DB with voice samples to display on Home Page |
POST | /api/talents | Post new talent to DB through sign up |
PUT | /api/talents/:id | Update details of a talent profile |
DELETE | /api/talents/:id | Delete details from talent profile |
GET | /api/audioProfiles | Get list of voice samples from third party API to seed sample data |

### Approach Taken
- Create a React application using vite.
- Create an Express backend server for API calls.
- Get a list of pre-built voices from PartyHT using axios.
- Extracted relevant data for rendering on React components.

## Technologies used
- MongoDB/Mongoose
- React
- JavaScript
- Express.js
- Node.js
- CSS

## How to get started
1. Clone the frontend and backend repos
    - **git clone https://github.com/lmfmay/echoes_of_home_fullstack_frontend.git**
    - **git clone https://github.com/lmfmay/echoes_of_home_fullstack_backend.git**


2. Change git remote url to avoid accidental pushes to base project
    - **git remote set-url origin github_username/repo_name**
    - **git remote -v # confirm the changes**

3. Download relevant packages for both client and server using npm i

4. This thirdparty API requires a userid and apikey which you can generate on the dashboard after signing up here: https://play.ht/studio/auth/login

5. Run the app locally by running 'npm run dev' in frontend and 'npm start' in backend.

## Acknowledgements
Third Party API:
- https://docs.play.ht/reference/api-list-ultra-realistic-voices