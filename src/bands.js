import pinkFLoydCover from './covers/pink-floyd.jpg';
import metallicaCover from './covers/metallica.jpg';
import nirvanaCover from './covers/nirvana.jpg';
import coldplayCover from './covers/coldplay.jpg';
import imagineDragonsCover from './covers/imagine-dragons.jpg';
import chainsmokersCover from './covers/chainsmokers.jpg';
import alanWalkerCover from './covers/alan-walker.jpg';
import redHotChilliPeppersCover from './covers/red-hot-chilli-peppers.jpg';
import linkinParkCover from './covers/linkin-park.jpg';
import porcupineTreeCover from './covers/porcupine-tree.jpg';
import kygoCover from './covers/kygo.jpg';
import davidGuettaCover from './covers/david-guetta.jpg';
import eminemCover from './covers/eminem.jpg';
import twentyOnePilotsCover from './covers/twenty-one-pilots.jpg';

const bands = [
  {
    id: 1,
    name: 'Pink Floyd',
    cover: pinkFLoydCover,
    playlist: [
      {
        title: 'Hey You',
        videoId: 'TFjmvfRvjTc'
      },
      {
        title: 'Comfortably Numb',
        videoId: '_FrOQC-zEog'
      },
      {
        title: 'Wish You Were Here',
        videoId: 'IXdNnw99-Ic'
      },
      {
        title: 'High Hopes',
        videoId: '7jMlFXouPk8'
      },
      {
        title: 'Coming Back To Life',
        videoId: 'yjoPWxmOCtc'
      }
    ]
  },
  {
    id: 2,
    name: 'Coldplay',
    cover: coldplayCover,
    playlist: []
  },
  {
    id: 3,
    name: 'Metallica',
    cover: metallicaCover,
    playlist: []
  },
  {
    id: 4,
    name: 'Nirvana',
    cover: nirvanaCover,
    playlist: []
  },

  {
    id: 5,
    name: 'Imagine Dragons',
    cover: imagineDragonsCover,
    playlist: []
  },
  {
    id: 6,
    name: 'Chainsmokers',
    cover: chainsmokersCover,
    playlist: []
  },
  {
    id: 7,
    name: 'Alan Walker',
    cover: alanWalkerCover,
    playlist: []
  },
  {
    id: 8,
    name: 'Red Hot Chilli Peppers',
    cover: redHotChilliPeppersCover,
    playlist: []
  },
  {
    id: 9,
    name: 'Linkin Park',
    cover: linkinParkCover,
    playlist: []
  },
  {
    id: 10,
    name: 'Porcupine Tree',
    cover: porcupineTreeCover,
    playlist: []
  },
  {
    id: 11,
    name: 'Kygo',
    cover: kygoCover,
    playlist: []
  },
  {
    id: 12,
    name: 'David Guetta',
    cover: davidGuettaCover,
    playlist: []
  },
  {
    id: 13,
    name: 'Eminem',
    cover: eminemCover,
    playlist: []
  },
  {
    id: 14,
    name: 'Twenty One Pilots',
    cover: twentyOnePilotsCover,
    playlist: []
  }
];

// const bandsToAdd = [
//   'Poets of the Fall',
//   'The Weeknd',
//   'Green Day',
//   'Avicii',
//   'Martin Garrix',
//   'Arctic Monkeys',
//   'Passenger',
//   'Led Zepplin',
//   'Eagles',
//   'Kanye West',
//   'Sia',
//   'Snow Patrol',
//   'Diljit',
//   'Sharry Mann',
//   'Jasmine Sandals',
//   'Guru Randhawa',
//   'Mankrit Aulakh',
//   'Hardy Sandhu',
//   'Badshah',
//   'Jasleen Royal',
//   'Ayushmann Khurrana',
//   'Imran khan'
// ];

export default bands;
