Ext.define('sff.controller.File', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            fileView:     'fileview',
			backButton:   'button[action=goBack]',
			toolbar:      'toolbar',
			authorLabel:  '#fpAuthor',
			createdLabel: '#fpCreated',
			typeLabel:    '#fpType',
			sizeLabel:    '#fpSize',
			fileContents: '#file-contents'
        },
        control: {
            fileView: {
				show: 'showView'
			},
			backButton: {
				tap: 'goToBack'
			}
        },
		fileId: null,
		fileName: null,
		fileAuthor: null,
		fileDate: null,
		fileType: null,
		fileSize: null
    },

	goToBack: function() {
		Ext.Viewport.setActiveItem('mainNestedlist');
	},

	showView: function() {
		var id = sff.app.getController('Main').getActiveFileIndex();
		
		if(id) {
			var store = Ext.getStore('treeStore');
			var record = store.getAt(store.findExact('tid', id));
			
			this.setFileId(id),
			this.setFileName(record.get('text')),
			this.setFileAuthor(record.get('author')),
			this.setFileDate(record.get('createDate')),
			this.setFileType(record.get('type')),
			this.setFileSize(record.get('size'))
			
			this.getToolbar().setTitle(this.getFileName());
			
			this.getAuthorLabel().setHtml(this.getFileAuthor());
			this.getCreatedLabel().setHtml(this.getFileDate());
			this.getTypeLabel().setHtml(this.getFileType());
			this.getSizeLabel().setHtml(this.getFileSize());
			
			this.readInTextFile();
		}
		
		sff.app.getController('Main').setActiveFileIndex(null);
	},
	
	readInTextFile: function() {
		var me = this;
		var rawFile = new XMLHttpRequest();
	    rawFile.open("GET", 'lorem.txt', true);
	    rawFile.onreadystatechange = function ()
	    {
	        if(rawFile.readyState === 4)
	        {
	            if(rawFile.status === 200 || rawFile.status == 0)
	            {
	                var allText = rawFile.responseText;
					me.getFileContents().setHtml(allText);
	            }
	        }
	    }
	    rawFile.send(null);
	}	
});
