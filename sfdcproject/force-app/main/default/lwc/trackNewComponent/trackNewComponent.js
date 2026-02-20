import { LightningElement, track } from 'lwc';

export default class TrackNewComponent extends LightningElement {
    @track fullName = { firstName: 'Saurabh', lastName: 'Samir' };
 
    handleChange(event) {
        this.fullName.firstName = event.target.value;
    }
}