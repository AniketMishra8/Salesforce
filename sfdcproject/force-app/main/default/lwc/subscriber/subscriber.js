import { LightningElement } from 'lwc';
import pubsub from './PubSub';

export default class Subscriber extends LightningElement {
    message = 'New Message';

    connectedCallback() {
        pubsub.subscribe('messageEvent', this.handleMessage.bind(this));
    }

    handleMessage(payload) {
        this.message = payload;
    }
}