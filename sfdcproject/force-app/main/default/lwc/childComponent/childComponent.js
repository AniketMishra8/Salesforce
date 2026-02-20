import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api messageFromParent;

    handleClick() {
        const event = new CustomEvent('childmessage', {
            detail: "Hello Parent, message received!"
        })

        this.dispatchEvent(event);
    }
}