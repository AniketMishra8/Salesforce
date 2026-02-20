import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    parentMessage ='Initial Message';
    @track childMessage ="";
    handleChange(event){
        this.parentMessage = event.target.value;
    }
    handleChildMessage(event){
        this.childMessage = event.detail;
    }

}