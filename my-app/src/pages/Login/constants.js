const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';

const clientId = 'd282747f9129492a94363f08f2205f83';

const scopes = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'user-library-read',
  'user-library-modify',
  'user-top-read',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-follow-read',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-modify-playback-state',
  'user-read-recently-played',
  'user-follow-modify',
];

export const urlLogin =
  `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
