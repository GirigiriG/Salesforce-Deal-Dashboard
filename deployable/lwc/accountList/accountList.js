import { LightningElement, api, track } from 'lwc';
import findAccount from '@salesforce/apex/AccountController.getAccounts';
export default class AccountList extends LightningElement {
    @track accounts = []
    @track showComponent = false;
    showListOfAccounts() {
        this.showComponent = this.accounts.length > 0
    }
    @api
    async enqueueAccountList(value) {
        if(value.length === 0) {
            this.accounts = [];
            this.showComponent = false;
            return;
        }
        this.accounts = await findAccount({name: value});
        this.showListOfAccounts();
    }

    handleOnClickSstopPropagation(event) {
        event.stopPropagation();
    }

    updateAccountList(event) {
        this.dispatchEvent(new CustomEvent('accountadded', {detail: event.detail}));
    }

    removeaccount(event) {
        this.dispatchEvent(new CustomEvent('removeaccount', {detail: event.detail}));
    }
}