const CLIENT_ID = '7d7621a7f4214742add3bb0935c94910';
const REDIRECT_URI = 'http://127.0.0.1:5173/callback/spotify';
const SCOPES = 'user-read-recently-played user-top-read user-read-private user-read-email user-read-playback-state user-modify-playback-state';

class spotifyAuth {
    constructor(){
        this.accessToken = sessionStorage.getItem('spotify_access_token');
        this.refreshToken = sessionStorage.getItem('spotify_refresh_token')
        this.tokenExpiry = localStorage.getItem('spotify_token_expiry');

    }

    isAuthenticated(){
        if (!this.accessToken) return false;

        if(this.tokenExpiry && Date.now() > parseInt(this.tokenExpiry)){
            this.logout();
            return false;
        }

        return true;

    }

    getAccessToken() {
        return this.accessToken;
    }





}