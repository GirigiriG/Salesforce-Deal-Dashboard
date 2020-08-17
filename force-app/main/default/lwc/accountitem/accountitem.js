import { LightningElement, api, track } from 'lwc';

export default class Accountitem extends LightningElement {
    @api name = '';
    @api id = '';
    @track variant = '';
    @track iconSize = 'x-small';

    handleMouseOverVariant() {
        this.iconSize = 'small'; 
    } 

    handleMouseOutVariant() {
        this.iconSize = 'x-small'; 
    }
    
    handleOnClickAddAccount() {
        const record = {
            Id: this.id,
            Name: this.name
        }
        if(this.variant === 'success') {
            this.dispatchEvent(new CustomEvent('removeaccount', {detail: record}));
            this.variant = 'error';
            return;
        }
        
        this.dispatchEvent(new CustomEvent('accountadded', {detail: record}));
        this.variant = 'success';
    }    
}