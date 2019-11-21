export default class SnakeApplication {
    static hasCollided(objectOne, objectTwo){
        return objectOne.x === objectTwo.x && objectOne.y === objectTwo.y
    }
}