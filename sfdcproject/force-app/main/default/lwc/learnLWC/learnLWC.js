import { api, LightningElement, track } from 'lwc';

export default class LearnLWC extends LightningElement {
    name = 'LWC learning';

    @api name1 = 'LWC API Decorator Learning';
    @track name2 = 'LWC Track API decorating learning';

    @api
    showAlert() {
        alert('Button clicked');
    }
}