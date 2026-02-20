import { LightningElement, api, wire } from 'lwc';
import {  getRecord } from 'lightning/uiRecordApi';

import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_NAME_FIELD from '@salesforce/schema/Contact.Email';

const FIELDS = [ FIRST_NAME_FIELD, LAST_NAME_FIELD, EMAIL_NAME_FIELD ];

export default class WireApexDemo extends LightningElement {
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS }) 
    contact;

    get firstName() {
        return this.contact?.data?.fields?.FirstName?.value;
    }

    get lastName() {
        return this.contact?.data?.fields?.LastName?.value;
    }

    get email() {
        return this.contact?.data?.fields?.Email?.value;
    }

    get error() {
        return this.contact?.error;
    }
}