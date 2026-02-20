import { LightningElement, api } from 'lwc';

export default class SetterAndGetter extends LightningElement {
    // Private storage to hold the actual string
    _itemName = ''; 

    @api
    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        // This logic runs EVERY time the value is assigned
        this._itemName = value ? value.toUpperCase() : '';
    }

    // This function catches the keystrokes
    handleInputChange(event) {
        // Assigning to this.itemName TRIGGERS the setter above
        this.itemName = event.target.value;
    }
}