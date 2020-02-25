/* eslint class-methods-use-this: ["error", { "exceptMethods": ["hasCollided"] }] */

import TwoObjectCollision from './TwoObjectCollision';

export default class Collision {
  constructor(maxWidth, maxHeight) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
  }

  hasCollided(object1, objectOrObjects) {
    const isCollectionOfObjects = objectOrObjects.length;

    return isCollectionOfObjects
      ? objectOrObjects.filter(object2 => TwoObjectCollision.hasCollided(object1, object2)).length > 0
      : TwoObjectCollision.hasCollided(object1, objectOrObjects);
  }

  hasGoneOutOfBounds(cellToCheck) {
    return cellToCheck.x < 0
        || cellToCheck.x * 11 > this.maxWidth
        || cellToCheck.y < 0
        || cellToCheck.y * 11 > this.maxHeight;
  }
}
