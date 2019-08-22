sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("deepdive.DeepDive.controller.Master", {
		formatter: formatter,

		onInit: function () {

		},

		onOrderPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail", {
				soId: oEvent.getSource().getBindingContextPath().substr(1)
			});
		}

	});
});