import { api, LightningElement } from 'lwc';
import firstTemplate from './lifeCycleHook.html';
import secondTemplate from './lifeCycleHook2.html'

export default class LifeCycleHook extends LightningElement {
    @api templateno = 'temp1';

    constructor() {
        super();
        console.log('Inside Constructor');
    }

    disconnectedCallback() {
        console.log('Inside disconnected Callback');
    }

    changeTemplate() {
        console.log('Inside Connected Callback');
        if(this.templateno === 'temp1') {
            this.templateno = 'temp2';
        } else {
            this.templateno = 'temp1';
        }
    }

    render() {
        console.log('Inside render: ' + this.template);
        if(this.templateno === 'temp1') {
            return firstTemplate;
        } else {
            return secondTemplate;
        }
    }

    renderedCallback() {
        console.log('Inside render callback');
    }

    errorCallback(error, stack) {
        console.log('Inside error callback' + error);
        alert('error' + error);
    }
}