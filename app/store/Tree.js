Ext.define('sff.store.Tree', {
	extend: 'Ext.data.TreeStore',
	
	config: {
		storeId: 'treeStore',
		model: 'sff.model.Tree',
		defaultRootProperty: 'items',
		data: {
			text: 'Network Share',
			items: [{
				tid: '1', 
				text: 'Folder 1',
				items: [
					{tid: '2', text: 'Folder 1',
			        items: [
						{tid: '3', text: 'File 1', author: 'Bob Jones', createDate: '1 Jan 2014', size: '12Kb', type: 'text', leaf: true}, 
						{tid: '4', text: 'File 2', author: 'Mary Green', createDate: '2 Jan 2014', size: '13Kb', type: 'text', leaf: true}
					]
			    	}, 
				{tid: '5', text: 'File 1', author: 'Bob Jones', createDate: '3 Jan 2014', size: '14Kb', type: 'text', leaf: true}, 
				{tid: '6', text: 'File 2', author: 'Susan Lewis', createDate: '4 Jan 2014', size: '15Kb', type: 'text', leaf: true}, 
				{tid: '7', text: 'File 3', author: 'Mary Green', createDate: '5 Jan 2014', size: '16Kb', type: 'text', leaf: true}, 
				{tid: '8', text: 'File 4', author: 'Martin Smith', createDate: '6 Jan 2014', size: '17Kb', type: 'text', leaf: true}, 
				{tid: '9', text: 'File 5', author: 'Fred Brown', createDate: '7 Jan 2014', size: '18Kb', type: 'text', leaf: true}
			]
			}, {
				tid: '10', 
			    text: 'Folder 2',
			    items: [
					{tid: '11', text: 'File 1', author: 'Bob Jones', createDate: '8 Jan 2014', size: '19Kb', type: 'text', leaf: true}, 
					{tid: '12', text: 'File 2', author: 'Susan Lewis', createDate: '9 Jan 2014', size: '20Kb', type: 'text', leaf: true}
				]
			}, {
				tid: '13', 
			    text: 'Folder 3',
			    items: [
					{tid: '14', text: 'File 1', author: 'Bob Jones', createDate: '10 Jan 2014', size: '21Kb', type: 'text', leaf: true}, 
					{tid: '15', text: 'File 2', author: 'Susan Lewis', createDate: '11 Jan 2014', size: '22Kb', type: 'text', leaf: true}, 
					{tid: '16', text: 'File 3', author: 'Fred Brown', createDate: '12 Jan 2014', size: '23Kb', type: 'text', leaf: true}
				]
			},
			{tid: '17', text: 'File 1', author: 'Martin Smith', createDate: '13 Jan 2014', size: '24Kb', type: 'text', leaf: true}, 
			{tid: '18', text: 'File 2', author: 'Susan Lewis', createDate: '14 Jan 2014', size: '25Kb', type: 'text', leaf: true}, 
			{tid: '19', text: 'File 3', author: 'Fred Brown', createDate: '15 Jan 2014', size: '26Kb', type: 'text', leaf: true}
			]
		}
	}
});
