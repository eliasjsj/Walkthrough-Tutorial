sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    'use strict';
    
    return Controller.extend("ui5.walkthrough.controller.App", {
        onInit(){
            //set data model on View
            const oData={
                recipient:{
                    name: "Camarada"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello(){
            MessageToast.show("Auf Wierdersen Asshole");
        }
    });
});