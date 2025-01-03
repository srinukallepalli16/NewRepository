/*global QUnit*/

sap.ui.define([
	"compro/demoproject/controller/NewView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NewView1 Controller");

	QUnit.test("I should test the NewView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
