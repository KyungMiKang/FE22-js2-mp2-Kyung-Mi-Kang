class Tamagotchi {
  #hunger;
  #happiness;

  #idHunger;
  #idHappiness;
  #idUpdate;

  #hungerSetInterval;
  #happinessSetInterval;
  #updateSetInterval;

  #happinessSet;

  #stopHunger;
  #stopHappiness;

  #update;

  #alive = true;

  constructor(name, type) {
    console.log(name, type);

    this.name = name;
    this.type = type;

    this.#hunger = 10;
    this.#happiness = 10;
  }

  hungerSetInterval(paragraf, statusParagraf, frame) {
    this.#idHunger = setInterval(() => {
      this.updateHunger(paragraf, statusParagraf, frame);
    }, 2000);
  }

  happinessSetInterval(t, r, y) {
    this.#idHappiness = setInterval(() => {
      this.updateHappiness(t, r, y);
    }, 3000);
  }

  stopHunger() {
    clearInterval(this.#idHunger);
  }

  stopHappiness() {
    clearInterval(this.#idHappiness);
  }

  updateHunger(element, element03, tamagotchi) {
    this.#hunger--;

    console.log('hunger', this.#hunger);
    element.innerText = `Hunger: ${this.#hunger}/10`;

    if (this.#hunger <= 0) {
      this.#alive = false;
      console.log('tamagochi dies', this.#alive);
      this.stopHunger();

      this.#happiness = 1;

      element03.innerText = 'Bye, my friend 😭';
      tamagotchi.classList.add('disable')
    }
  }

  updateHappiness(element02, element03, tamagotchi) {
    this.#happiness--;

    console.log('hapiness', this.#happiness);
    element02.innerText = `Happiness: ${this.#happiness}/10`;

    if (this.#happiness <= 0) {
      this.#alive = false;
      console.log('tamagochi dies', this.#alive);
      this.stopHappiness();

      this.#hunger = 1;

      element03.innerText = 'Bye, my friend😭';
      tamagotchi.classList.add('disable')
    }
  }

  plusHunger() {
    this.#hunger++;
    console.log('Plus hunger', this.#hunger);

    if (this.#hunger >= 11) {
      this.#hunger = 10;
    }
  }

  plusHappiness() {
    this.#happiness++;

    console.log('Plus hunger', this.#happiness);

    if (this.#happiness >= 11) {
      this.#happiness = 10;
    }
  }
}

export { Tamagotchi };
