/// <reference path="../../SnTypings/GlideSystem.d.ts" />
/// <reference path="../../SnTypings/GlideRecord.d.ts" />
/// <reference path="../../SnTypings/ServiceCatalog.d.ts" />
var workflow_service_catalog_item;
(function (workflow_service_catalog_item) {
    var fulfill_order;
    (function (fulfill_order) {
        function advancedScript(current, task, workflow) {
            task.short_description.setValue('Fulfill ' + current.cat_item.short_description + ' request for ' +
                (((current.short_description + "").indexOf(current.cat_item.short_description.getValue()) < 0) ?
                    current.request.requested_for.getDisplayValue() + ' (' + current.short_description + ')' :
                    current.request.requested_for.getDisplayValue()));
            if (!gs.nil(current.cat_item.group))
                current.assignment_group.setValue(current.cat_item.group);
            task.assignment_group.setValue(current.assignment_group);
            gs.eventQueue('army.sc_req_item.fulfill_order', current, task.number.getValue());
        }
    })(fulfill_order || (fulfill_order = {}));
    var receive_backordered_item;
    (function (receive_backordered_item) {
        function advanced_script(current, task, workflow) {
            task.short_description.setValue('Receive Catalog Item: ' + current.cat_item.short_description);
            task.assignment_group.setValue(current.assignment_group);
            if (!gs.nil(current.assigned_to))
                task.assigned_to.setValue(current.assigned_to);
            gs.eventQueue('army.sc_req_item.backordered', current, task.number.getValue());
        }
    })(receive_backordered_item || (receive_backordered_item = {}));
    var determine_fulfillment_group;
    (function (determine_fulfillment_group) {
        function advancedScript(current, task, workflow) {
            task.short_description.setValue('Assign catalog item request: ' + current.cat_item.short_description);
            gs.eventQueue('army.sc_req_item.no.fulfillment_group', current, task.number.getValue());
        }
    })(determine_fulfillment_group || (determine_fulfillment_group = {}));
})(workflow_service_catalog_item || (workflow_service_catalog_item = {}));
//# sourceMappingURL=Service Castalog Item.js.map