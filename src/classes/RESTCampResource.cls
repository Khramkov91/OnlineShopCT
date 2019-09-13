/**
 * Created by user on 10-Sep-19.
 */
@RestResource(urlMapping='/testAccount/*')
global with sharing class RESTCampResource {
    @HttpGet
    global static Account getRecord() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String sId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account result = [SELECT Id, Name FROM Account WHERE Id = :sID];
        return result;
    }
}
//	0012v00002UxQucAAF