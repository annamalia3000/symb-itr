class Team {
    constructor() {
      this.members = new Set;
    }

    add(character) {
      this.members.add(character);
    }

    [Symbol.iterator]() {
      const membersArray = [...this.members];
      let index = 0;
      return {
        next() {
          if(index < membersArray.length) {
            return {
              value: membersArray[index++],
              done: false
            }
          } else {
            return {
              done: true
            }
          }
        }
      }
    }
  }

// генератор

  class Team {
    constructor() {
      this.members = new Set;
    }

    add(character) {
      this.members.add(character);
    }

    *[Symbol.iterator]() {
      for (const member of this.members) {
        yield member;
      }
    }
  }