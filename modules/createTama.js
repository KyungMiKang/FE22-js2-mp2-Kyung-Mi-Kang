import { Tamagotchi } from './feedplay.js';

class DeliverTama extends Tamagotchi {
  #container;
  
  constructor(name, type, container) {
    console.log(name, type);
    super(name, type);

    if(name ==''){
      return alert(`Please, Fill out your friend's name`);

    }
    this.#container = container;
    this.createTama();
  }

  createTama() {
    const frame = document.createElement('div');
    frame.setAttribute('id', 'frame');

    const tamagotchi = document.createElement('div');
    frame.append(tamagotchi);

    tamagotchi.setAttribute('id', 'tamagotchi');
    this.#container.append(frame);

    const hue = Math.round(Math.random() * 360);
    frame.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;

    const petNameType = document.createElement('h3');
    petNameType.innerText = `${this.name} / ${this.type}`;
    tamagotchi.append(petNameType);

    const element = document.createElement('h3');
    element.innerText = `Hunger:10/10`;
    tamagotchi.append(element);
    //super.hungerSetInterval(element);

    const element02 = document.createElement('h3');

    element02.innerText = 'Happiness:10/10';
    tamagotchi.append(element02);
    // super.happinessSetInterval(element02);

    const feedBtn = document.createElement('button');
    feedBtn.setAttribute('id', 'feedBtn');
    feedBtn.innerHTML = '😋';
    //feedBtn.innerText = `Eat much`;

    feedBtn.setAttribute('id', 'feedBtn');
    feedBtn.style.margin = '1rem';
    tamagotchi.append(feedBtn);

    feedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      super.plusHunger();
    });

    const playBtn = document.createElement('button');
    playBtn.setAttribute('id', 'playBtn');
    playBtn.innerHTML = '🎮';

    playBtn.setAttribute('id', 'playBtn');
    playBtn.style.margin = '1rem';
    tamagotchi.append(playBtn);

    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      super.plusHappiness();
    });

    const element03 = document.createElement('h3');
    element03.innerText = `${this.name} is still alive`;
    element03.setAttribute('id', 'element03');
    // element03.style.backgroundColor = 'white';
    // element03.style.width ='12rem';

    console.log(element03);
    tamagotchi.append(element03);
    super.hungerSetInterval(element, element03, tamagotchi);
    super.happinessSetInterval(element02, element03, tamagotchi);

    // const hue = Math.round(Math.random() * 360);
    // tamagotchi.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;
  }
}

export { DeliverTama };
