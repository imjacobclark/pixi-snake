class Status {
  constructor(graphics, text, status = new Running()) {
    this._graphics = graphics;
    this._text = text;
    this._status = status;
  }

  get graphics() {
    return this._text;
  }

  get status() {
    return this._status;
  }

  setRunning() {
    this._status = new Running();
  }

  setPaused() {
    this._status = new Paused();
  }

  draw(){
    this._text.text = this._status.toString;
  }
}

class Running {
  constructor() {
    this.toString = "running";
  }

  equals(other) {
    return this.toString === other.toString;
  }
}

class Paused {
  constructor() {
    this.toString = "paused";
  }

  equals(other) {
    return this.toString === other.toString;
  }
}

export { Status, Running };
