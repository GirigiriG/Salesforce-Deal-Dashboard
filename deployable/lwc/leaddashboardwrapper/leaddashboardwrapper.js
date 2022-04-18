import { LightningElement, track } from 'lwc';

export default class Leaddashboardwrapper extends LightningElement {
    @track disableBatchButton = true;
    @track listOfAccounts = [];
    @track accountListHeight = 0;


    // renderedCallback(){}

    handleLightningInputChange(event)  {
        const accountsComponent = this.template.querySelector('c-account-List');
        accountsComponent.enqueueAccountList(event.detail.value);
    }
    handleOnClickLightningInput() {
        const accountsComponent = this.template.querySelector('c-account-List');
        const searchQuery = this.template.querySelector('lightning-input').value;
        if(searchQuery.length > 0) {
            accountsComponent.enqueueAccountList(searchQuery);
            return;    
        }
    }

    handleOnClickHideAll() {
        const accountsComponent = this.template.querySelector('c-account-List');
        accountsComponent.enqueueAccountList('');
    }

    accountadded(event) {
        this.listOfAccounts.push(event.detail);
        this.disableBatchButton = this.listOfAccounts.length > 0 ? false : true;
        console.log(this.disableBatchButton);
    }

    removeaccount(event) {
        this.listOfAccounts = this.listOfAccounts.filter( record => record.Id.split('-')[0] != event.detail.Id.split('-')[0]);
        console.log(this.listOfAccounts.length);
        this.disableBatchButton = this.listOfAccounts.length > 0 ? false : true;
    }
}

