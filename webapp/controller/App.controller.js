sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    
    return Controller.extend("ui5.walkthrough.controller.App", {
        onShowHello(){
            //Show a native JAvascript Alert
            alert("Hola Camarada!");
        }
    });
});