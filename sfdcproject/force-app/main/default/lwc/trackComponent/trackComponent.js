import { LightningElement, track } from 'lwc';

export default class TrackComponent extends LightningElement {
    name = '';
 
    handleChange(event) {
        this.name = event.target.value;
    }
}