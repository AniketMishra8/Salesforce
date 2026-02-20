const events = {};

const pubsub = {
    subscribe(eventName, callback) {
        if (!events[eventName]) {
            events[eventName] = [];
        }
        events[eventName].push(callback);
    },

    unsubscribe(eventName, callback) {
        if (!events[eventName]) return;
        events[eventName] = events[eventName]
            .filter(listener => listener !== callback);
    },

    publish(eventName, payload) {
        if (!events[eventName]) return;
        events[eventName].forEach(callback => {
            callback(payload);
        });
    }
};

export default pubsub;