export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже есть в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    for (const element of characters) {
      this.members.add(element);
    }
  }

  toArray() {
    return [...this.members];
  }
}
