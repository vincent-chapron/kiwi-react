export class Period {
    _name;
    _start_at;
    _end_at;
    _start_arrived_time;
    _end_arrived_time;
    _start_left_time;
    _end_left_time;

    getName() {return this._name};
    setName(name) {this._name = name};

    getStartAt() {return this._start_at};
    setStartAt(start_at) {this._start_at = start_at};

    getEndAt() {return this._end_at};
    setEndAt(end_at) {this._end_at = end_at};

    getStartArrivedTime() {return this._start_arrived_time};
    setStartArrivedTime(start_arrived_time) {this._start_arrived_time = start_arrived_time};

    getEndArrivedTime() {return this._end_arrived_time};
    setEndArrivedTime(end_arrived_time) {this._end_arrived_time = end_arrived_time};

    getStartLeftTime() {return this._start_left_time};
    setStartLeftTime(start_left_time) {this._start_left_time = start_left_time};

    getEndLeftTime() {return this._end_left_time};
    setEndLeftTime(end_left_time) {this._end_left_time = end_left_time};
}
