sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("deepdive.DeepDive.controller.Master", {
		formatter: formatter,

		onInit: function () {

		}
	});
});