sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/ui/unified/ColorPickerPopover"
], function (Controller, formatter, ColorPickerPopover) {
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
		},

		onApplyColorPress: function (oEvent) {
			var oColorPickerSimplifiedPopover = new ColorPickerPopover({
				colorString: "lightgray",
				displayMode: sap.ui.unified.ColorPickerDisplayMode.Simplified,
				mode: sap.ui.unified.ColorPickerMode.HSL,
				change: [this._colorSelected, this]
			});
			oColorPickerSimplifiedPopover.openBy(oEvent.getSource());
		},

		_colorSelected: function (oEvent) {
			var sColor = oEvent.getParameter("colorString");
			var iNumber = this.getView().byId("everyNStepInput").getValue();
			$("#" + this.getView().byId("masterTable").getId() + " > table > tbody > tr:nth-child(" + iNumber + "n)").css({
				"background-color": sColor
			});
		}

	});
});