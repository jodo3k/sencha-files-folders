Ext.define('sff.model.Tree', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'tid',        type: 'int'},
            {name: 'text',       type: 'string'},
			{name: 'author',     type: 'string'},
			{name: 'createDate', type: 'string'},
			{name: 'size',       type: 'string'},
			{name: 'type',       type: 'string'},
			{name: 'leaf',       type: 'boolean'}
		]
	}
});
