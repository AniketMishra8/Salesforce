import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    greeting = 'Aniket';

    handleClick(event) {
        this.greeting = this.template.querySelector('lightning-input').value;
    }
}