import { LightningElement, track} from 'lwc';

export default class SecondComponent extends LightningElement {
    @track firstName = 'Good';

    handleChange(event) {
        var targetElement = event.target;
        this.firstName = targetElement.value;
        console.log('Changed Value: ' + this.firstName);
    }
}