import {Record} from "immutable";

const GameRecord = Record({ id: null, title: '' });

class Game extends GameRecord {
}

export default Game