import { LightningElement, api } from 'lwc';

export default class SpinnerComponent extends LightningElement {
    @api isLoaded = false;
    // (method).SpinnerComponent.handleClick(): void
    handleClick() {
        this.isLoaded = !this.isLoaded;
    }
}