({
    handleSave : function(component, event, helper) {
        component.find("dsComp").saveRecord(function(result){
            //$A.get("e.force:navigateToSObject").setParams({"recordId":component.get("v.contact.Id")}).fire();
            $A.get("e.force:closeQuickAction").fire();
        });
    },
    handleRefresh : function(component, event, helper) {
        if (event.getParams().changeType === "CHANGED") {
            component.find("dsComp").reloadRecord();
        }
    }
})
