import {
  MdHome,
  MdPerson,
  MdPlaylistPlay,
  MdMusicNote,
  MdAlbum,
} from 'react-icons/md';
import { FiSearch, FiClock } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export const menuItems = [
  {
    label: 'Home',
    path: '/',
    icon: <MdHome size="1.5rem" />,
  },
  {
    label: 'Search',
    path: '/search',
    icon: <FiSearch size="1.5rem" />,
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: <MdPerson size="1.5rem" />,
  },
];

export const libraryItems = [
  {
    label: 'Recently Played',
    path: '/recently-played',
    icon: <FiClock size="1rem" />,
  },
  {
    label: 'Liked Songs',
    path: '/collection/tracks',
    icon: <FaHeart size="1rem" />,
  },
  {
    label: 'Playlists',
    path: '/collection/playlists',
    icon: <MdPlaylistPlay size="1rem" />,
  },
  {
    label: 'Artist',
    path: '/collection/artists',
    icon: <MdMusicNote size="1rem" />,
  },
  {
    label: 'Albums',
    path: '/collection/albums',
    icon: <MdAlbum size="1rem" />,
  },
];