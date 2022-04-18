public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(String name){
        System.debug(AccountSelector.getAccountByName(name));
        System.debug('hi gideon');
        
        return AccountSelector.getAccountByName(name);
    }
}
