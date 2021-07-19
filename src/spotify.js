import Login from "./Login";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "fedf6020e31a467fad7f91224359bcf5";
const redirectUri = "https://spotify-clone-second.web.app/";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getTokenFromUrl = () => {  
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;