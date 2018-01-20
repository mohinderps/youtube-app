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
    playlist: [
      {
        title: 'Hymn For The Weekend',
        videoId: 'YykjpeuMNEk'
      },
      {
        title: 'Paradise',
        videoId: '1G4isv_Fylg'
      },
      {
        title: 'Magic',
        videoId: 'Qtb11P1FWnc'
      },
      {
        title: 'The Scientist',
        videoId: 'RB-RcX5DS5A'
      },
      {
        title: 'A Sky Full Of Stars',
        videoId: 'VPRjCeoBqrI'
      }
    ]
  },
  {
    id: 3,
    name: 'Metallica',
    cover: metallicaCover,
    playlist: [
      {
        title: 'Nothing Else Matters',
        videoId: 'tAGnKpE4NCI'
      },
      {
        title: 'The Unforgiven',
        videoId: 'Ckom3gf57Yw'
      },
      {
        title: 'Fade To Black',
        videoId: 'IfRY3SsozuM'
      },
      {
        title: 'Turn The Page',
        videoId: 'qPOTEs_yTJo'
      }
    ]
  },
  {
    id: 4,
    name: 'Nirvana',
    cover: nirvanaCover,
    playlist: [
      {
        title: 'Smells Like Teen Spirit',
        videoId: 'hTWKbfoikeg'
      },
      {
        title: 'The Man Who Sold The World',
        videoId: 'fregObNcHC8'
      },
      {
        title: 'Something In The Way',
        videoId: 'jlRdcEmcatw'
      },
      {
        title: 'All Apologies',
        videoId: 'aWmkuH1k7uA'
      },
      {
        title: 'You Know You\'re Right',
        videoId: 'qv96yJYhk3M'
      }
    ]
  },

  {
    id: 5,
    name: 'Imagine Dragons',
    cover: imagineDragonsCover,
    playlist: [
      {
        title: 'Whatever It Takes',
        videoId: 'gOsM-DYAEhY'
      },
      {
        title: 'Radioactive',
        videoId: 'ktvTqknDobU'
      },
      {
        title: 'Sucker For Pain',
        videoId: '59jGD4WrmE'
      },
      {
        title: 'Thunder',
        videoId: 'fKopy74weus'
      },
      {
        title: 'Demons',
        videoId: 'mWRsgZuwf_8'
      }
    ]
  },
  {
    id: 6,
    name: 'Chainsmokers',
    cover: chainsmokersCover,
    playlist: [
      {
        title: 'Don\'t Let Me Down',
        videoId: 'Io0fBr1XBUA'
      },
      {
        title: 'Closer',
        videoId: 'PT2_F-1esPk'
      },
      {
        title: 'All We Know',
        videoId: '7mWQ38SpEf8'
      },
      {
        title: 'Young',
        videoId: 'z6nfK_zhYNk'
      },
      {
        title: 'Paris',
        videoId: 'RhU9MZ98jxo'
      }
    ]
  },
  {
    id: 7,
    name: 'Alan Walker',
    cover: alanWalkerCover,
    playlist: [
      {
        title: 'Faded',
        videoId: '60ItHLz5WEA'
      },
      {
        title: 'Alone',
        videoId: '1-xGerv5FOk'
      },
      {
        title: 'Sing Me To Sleep',
        videoId: '2i2khp_npdE'
      }
    ]
  },
  {
    id: 8,
    name: 'Red Hot Chilli Peppers',
    cover: redHotChilliPeppersCover,
    playlist: [
      {
        title: 'Dark Necessities',
        videoId: 'Q0oIoR9mLwc'
      },
      {
        title: 'Californication',
        videoId: 'YlUKcNNmywk'
      },
      {
        title: 'Snow (Hey Oh)',
        videoId: 'https://www.youtube.com/watch?v=yuFI5KSPAt4'
      }
    ]
  },
  {
    id: 9,
    name: 'Linkin Park',
    cover: linkinParkCover,
    playlist: [
      {
        title: 'Numb',
        videoId: 'kXYiU_JCYtU'
      },
      {
        title: 'Talking To Myself',
        videoId: 'lvs68OKOquM'
      },
      {
        title: 'In The End',
        videoId: 'eVTXPUF4Oz4'
      },
      {
        title: 'Caste Of Glass',
        videoId: 'ScNNfyq3d_w'
      },
      {
        title: 'What I\'ve Done',
        videoId: '8sgycukafqQ'
      }
    ]
  },
  {
    id: 10,
    name: 'Porcupine Tree',
    cover: porcupineTreeCover,
    playlist: [
      {
        title: 'Lazarus',
        videoId: 'nTjc1sPktlY'
      },
      {
        title: 'Trains',
        videoId: '0UHwkfhwjsk'
      },
      {
        title: 'Arriving Somewhere But Not Here',
        videoId: 'WbWhpfXisZw'
      }
    ]
  },
  {
    id: 11,
    name: 'Kygo',
    cover: kygoCover,
    playlist: [
      {
        title: 'Stargazing',
        videoId: 'hEdvvTF5js4'
      },
      {
        title: 'This Town',
        videoId: '0pwttmAYCTw'
      },
      {
        title: 'Firestone',
        videoId: '9Sc-ir2UwGU'
      },
      {
        title: 'It Ain\'t Me',
        videoId: 'D5drYkLiLI8'
      }
    ]
  },
  {
    id: 12,
    name: 'David Guetta',
    cover: davidGuettaCover,
    playlist: [
      {
        title: 'Titanium',
        videoId: 'JRfuAukYTKg'
      },
      {
        title: 'Complicated',
        videoId: 'w0EF3AxJwLU'
      },
      {
        title: 'Play Hard',
        videoId: '5dbEhBKGOtY'
      }
    ]
  },
  {
    id: 13,
    name: 'Eminem',
    cover: eminemCover,
    playlist: [
      {
        title: 'Lose Yourself',
        videoId: '_Yhyp-_hX2s'
      },
      {
        title: 'Till I Collapse',
        videoId: 'ytQ5CYE1VZw'
      },
      {
        title: 'Love The Way You Lie',
        videoId: 'uelHwf8o7_U'
      }
    ]
  },
  {
    id: 14,
    name: 'Twenty One Pilots',
    cover: twentyOnePilotsCover,
    playlist: [
      {
        title: 'Heathens',
        videoId: 'UprcpdwuwCg'
      },
      {
        title: 'Stressed Out',
        videoId: 'pXRviuL6vMY'
      },
      {
        title: 'Ride',
        videoId: 'Pw-0pbY9JeU'
      }
    ]
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
