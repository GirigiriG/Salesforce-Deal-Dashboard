import { LightningElement, api } from 'lwc';

export default class Pill extends LightningElement {
    @api name = ''
    @api accounts = [];
    @api id = ''
    
    handleOnClickRemoveAccount() {
        this.dispatchEvent(new CustomEvent('removeaccount', {detail: {Id: this.id}}));
    }

    handleOnClickSstopPropagation(event) {
        event.stopPropagation();
    }
}