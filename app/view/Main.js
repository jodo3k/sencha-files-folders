Ext.define('sff.view.Main', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'mainNestedlist',

    requires: [],

    config: {
		cls: 'main-listing',
		fullscreen: true,
		title: 'Network Share',
		displayField: 'text',
		store: 'treeStore'
    }
});
