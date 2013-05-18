Ext.Loader.setPath('Ext.ux', 'ext/ux');

Ext.application({
    name: 'AM',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    controllers: [
        'Users'
    ]
});
