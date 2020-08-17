public with sharing class AccountSelector {
    public static List<Account> getAccountByName(String name) {
        String query = 'Select Name From Account WHERE Name LIKE \'%'+name+'%\'';
        return (List<Account>) Database.query(query);
    }
}
