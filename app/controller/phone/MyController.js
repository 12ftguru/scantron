Ext.define('SNS.controller.phone.MyController', {
    extend: 'SNS.controller.MyController',
    clearStatus: function(msg) {
        this.getStatusView().getStore().removeAll();
        this.getDetailView().setData({});
	this.getDetailView().disable();
        if (msg !== false) {
            msg = msg || '';
            return this.status(msg);
        }
    }


});
