sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';
    
    return Controller.extend("ui5.walkthrough.controller.App", {
        onShowHello(){
            MessageToast.show("Auf Wierdersen");
        }
    });
});