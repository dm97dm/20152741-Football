import React from 'react';

function Football ({name, picture}) {
  return (
    <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    </div>
    );
  }

const footballPlayers = [
  {
    id: 1,
    name: 'Pedri',
    image: 'https://image.fmkorea.com/files/attach/new2/20210613/486616/3567410260/3675217066/87999841fde737260b94977ed9a37b87.jpg'
  },
  {
    id :2,
    name : 'De Jong',
    image: 'https://obj-sg.thewiki.kr/data/ed9484eb9eaded82a420eb8d94ec9aa9342e6a7067.jpg'
  },
  {
    id :3,
    name : 'Ansu Fati',
    image: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcMmQNc%2FbtqxSgC1a8V%2FDsWt5FIDlswOINIB5VjNyK%2Fimg.jpg'
  },
  {
    id: 4,
    name : 'Sergio Busquets',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99BC87405CEFCC5203&f=1&nofb=1'
  }
];

function App () {
  return (
    <div>
      {footballPlayers.map(player => <Football key ={player.id} name={player.name} picture={player.image}/>)}
    </div>
  )
};

export default App;