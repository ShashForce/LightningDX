({
    handleSave : function(component, event, helper) {
        //invoke Data Service's inbuilt saveRecord function
        component.find("DataService").saveRecord(function(result){});
    }
})