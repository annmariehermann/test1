Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
        items : [ 
            { 
                xtype: 'rallybutton', 
                text: 'Click me', 
                handler: function() { 
                    Ext.Msg.alert('Alert Message', 'Testing'); 
                    
                } 
            } 
        ],
        
        launch: function() {
        //Write app code here
    }
});
//different now
//change
