import { LightningElement, track } from 'lwc';
import createNewAccountHandler from '@salesforce/apex/CreateAccountController.createNewAccountHandler';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordInAccount extends LightningElement {
    @track error;
    @track accRecord = {
        Name: '',
        Phone: '',
        Type: '',
        Industry: ''
    };

    inputChangeHandler(event) {
        const { name, value } = event.target; 
        this.accRecord = { 
            ...this.accRecord, 
            [name]: value 
        };
    }
    handleSave() {
        createNewAccountHandler({ objAcc: this.accRecord })
            .then(result => {
                this.accRecord = {};
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created successfully',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body ? error.body.message : 'Unknown error',
                        variant: 'error'
                    })
                );
            });
    }
}