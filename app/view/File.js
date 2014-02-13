Ext.define('sff.view.File', {
    extend: 'Ext.Panel',
    xtype: 'fileview',

    requires: [
		'Ext.Label'
	],

    config: {
		cls: 'file-panel',
		items: [
            {
                xtype: 'toolbar',
                title: 'File',
                items: [
                    {
                        xtype: 'button',
                        ui: 'normal',
                        iconCls: 'arrow_left',
                        iconMask: true,
                        action: 'goBack'
                    }
                ]
            },
			{
				xtype: 'container',
				cls: 'file-properties',
				items: [
					{
						xtype: 'label',
						cls: 'file-properties-labels',
						html: 'Author:'
					},
					{
						xtype: 'label',
						cls: 'file-properties-values',
						id: 'fpAuthor',
						html: '-'
					},
					{
						xtype: 'label',
						cls: 'file-properties-labels',
						html: 'Created:'
					},
					{
						xtype: 'label',
						cls: 'file-properties-values',
						id: 'fpCreated',
						html: '-'
					},
					{
						xtype: 'label',
						cls: 'file-properties-labels',
						html: 'Type:'
					},
					{
						xtype: 'label',
						cls: 'file-properties-values',
						id: 'fpType',
						html: '-'
					},
					{
						xtype: 'label',
						cls: 'file-properties-labels',
						html: 'Size:'
					},
					{
						xtype: 'label',
						cls: 'file-properties-values',
						id: 'fpSize',
						html: '-'
					}
				]
			},
			{
				xtype: 'container',
				cls: 'file-contents',
				id: 'file-contents',
				items: [
					{
						xtype: 'label',
						html: 'file contents'
					}
				]
			}
		]
    }
});
