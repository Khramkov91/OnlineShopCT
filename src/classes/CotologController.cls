public with sharing class CotologController {
    @AuraEnabled
    public static List<Catalog__c> sortCotolog(String min, String max, String category) {
        String query = 'SELECT Id, Name, Category__c, Cost__c, Quantity__c FROM Catalog__c ';

        if (String.isNotBlank(min)) {
            query += 'WHERE Cost__c >= ' + min + 'AND';
        } else query += 'WHERE';
        if (String.isNotBlank(max)) query += ' Cost__c <= ' + max;
        query = query.removeEnd('AND');
        query = query.removeEnd('WHERE');
        query += ' ORDER BY Cost__c';
        system.debug(query);

        List<Catalog__c> queryNew = new List<Catalog__c>();
        List<Catalog__c> queryLast = new List<Catalog__c>();
        queryNew = database.query(query);
        for (Catalog__c c : queryNew) {
            if (c.Category__c == category || category == 'All' || String.isBlank(category)) {
                queryLast.add(c);
            }
        }
        system.debug(queryLast);
        return queryLast;


    }
}