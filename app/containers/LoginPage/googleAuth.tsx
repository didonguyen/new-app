
const googleOauthEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth'
const GOOGLE_CLIENT_ID = '369382447801-ms7oapf03ci4cttt1h1ebfiik34aac5t.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:3000';

export const signInGoogle = () => {
    window.open(
        `${googleOauthEndpoint}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&state=pass-through value`,
    '_blank')
}