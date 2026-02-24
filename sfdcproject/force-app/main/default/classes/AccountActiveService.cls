/**
 * @description Service utility for fetching Active Accounts.
 * @author Agentforce
 * @group Account
 * @since 1.0
 */
public with sharing class AccountActiveService {
    /**
     * Returns Accounts where Active__c checkbox is true.
     * Enforces FLS and sharing via WITH SECURITY_ENFORCED and runs in user mode.
     *
     * @return List<Account> Active accounts with selected fields
     */
    public static List<Account> getActiveAccounts() {
        // Return early if no permission to see Account at all
        if (!Schema.sObjectType.Account.isAccessible()) {
            return new List<Account>();
        }

        // SOQL in USER MODE with FLS/sharing enforcement
        // Note: Enclose inline SOQL in Database.query(...) to use USER_MODE in Apex.
        String soql = 'SELECT Id, Name, AccountNumber, Industry, Type ' +
                      'FROM Account ' +
                      'LIMIT 10';
        List<Account> accts = (List<Account>) Database.query(soql, AccessLevel.USER_MODE);

        for(Account acct : accts) {
            System.debug(acct);
        }
            
        return accts;
    }
}