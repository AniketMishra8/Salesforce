import { LightningElement, track } from 'lwc';
import createNewStudentHandler from '@salesforce/apex/CreateStudentController.createNewStudentHandler';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordInStudent extends LightningElement {
    @track error;
    
    @track stuRecord = {
        Name: '',
        Phone_Number__c: '',
        Roll_Number__c: '',
        Student_Info__c: ''
    };

    inputChangeHandler(event) {
        const { name, value } = event.target; 
        this.stuRecord = { 
            ...this.stuRecord, 
            [name]: value 
        };
    }

    handleSave() {
        createNewStudentHandler({ objStu: this.stuRecord })
            .then(() => {
                // Clear the form
                this.stuRecord = { Name: '', Phone_Number__c: '', Roll_Number__c: '', Student_Info__c: '' };
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Student created successfully',
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