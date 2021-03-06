Rally.onReady(function(){
    Ext.define('CustomApp', {
        extend: 'Rally.app.App',
        componentCls: 'app',
        
        launch: function() {
            Rally.data.ModelFactory.getModel({
                type: 'UserStory',
                success: function(model) {
                    this.grid=this.add({
                        xtype:'rallygrid',
                        model: model,
                        columnCfgs: [
                            'FormattedID',
                            'Name',
                            'Owner'
                            ],
                            storeConfig: {
                                filters: [
                                    {
                                        property:'ScheduleState',
                                        operator: '=',
                                        value:'Defined'
                                        
                                    }
                                ]
                            }
                    });
                },
                scope: this
    });
}
}
)});