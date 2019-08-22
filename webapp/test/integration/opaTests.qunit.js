/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"deepdive/DeepDive/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});