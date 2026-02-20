import { LightningElement } from 'lwc';
import pubsub from './PubSub';

export default class Publisher extends LightningElement {

    handleClick() {
        pubsub.publish('messageEvent', 'Hello From Publisher');
    }
}