public with sharing class ContactController {

    public ContactController() {

    }
    
    //Cacheable is set tot true so we can store the list in the cache and so that this can be called within our LWC
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT FirstName, LastName, Email FROM Contact];
    }
}