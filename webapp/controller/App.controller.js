sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
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

            //set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName:"ui5.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello(){
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            //show Message
            MessageToast.show(sMsg);
        }
    });
});