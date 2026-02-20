import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactHelper.getContactList';

export default class GetContactLwc extends LightningElement {
    @wire(getContactList) contacts;
}