class BaseEvent {
    type = '';
    data = undefined;

    constructor(data) {
        this.data = data;
    }
}

export { BaseEvent };
