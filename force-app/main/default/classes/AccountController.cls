public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(String name){
        System.debug(AccountSelector.getAccountByName(name));
        return AccountSelector.getAccountByName(name);
    }
}
