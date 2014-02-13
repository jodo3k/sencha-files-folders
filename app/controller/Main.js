Ext.define('sff.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainNestedlist: 'mainNestedlist'
        },
        control: {
            mainNestedlist: {
                leafitemtap: 'handleItemTap'
            }
        },
		activeFileIndex: null
    },
	
	handleItemTap: function(me, list, index, item, e) {
		var record = item.get('record');
		this.setActiveFileIndex(record.get("tid"));
		Ext.Viewport.setActiveItem('fileview');
	}
});
