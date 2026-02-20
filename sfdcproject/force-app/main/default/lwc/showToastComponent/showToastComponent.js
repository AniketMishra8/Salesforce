import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastComponent extends LightningElement {
    myTitle = 'New Case';
    myMessage = 'Case created successfully';
    handleClick() {
        this.showToast();
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Toast Demo',
            message: 'Toast message',
            variant: 'Warning',
        });
        this.dispatchEvent(event);
    }
}