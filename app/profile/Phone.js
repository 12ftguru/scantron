Ext.define('SNS.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
        views: ['MainView'],
	controllers: ['MyController']
    },

    isActive: function() {
	console.log('Here', Ext.os.is('Phone'), Ext.os);
        return Ext.os.is('Phone');
    },
	
    launch: function() {
	console.log('Here!');
        Ext.create('SNS.view.phone.MainView', {fullscreen: true});
    }
});
