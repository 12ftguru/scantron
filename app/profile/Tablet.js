Ext.define('SNS.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['MainView']
    },

    isActive: function() {
        return true; // true because we've already checked isPhone
    },
    launch: function() {

        Ext.create('SNS.view.tablet.MainView', {fullscreen: true});
    }
});
