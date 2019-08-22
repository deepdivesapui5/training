sap.ui.define([], function () {
	"use strict";
	return {
		addSpaces: function (amount) {
			var aValue = ("" + amount).split(".");
			var len = aValue[0].length;
			var sResult = aValue[0].slice(0, len % 3) + " ";
			for (var i = len % 3; i < len; i++) {
				sResult += (len - i) % 3 !== 0 ? aValue[0][i] : " " + aValue[0][i];
			}
			return sResult + "." + aValue[1];
		}
	};
});