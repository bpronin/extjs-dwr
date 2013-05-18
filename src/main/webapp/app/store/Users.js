Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.ux.DwrProxy'
    ],

    model: 'AM.model.User',
    buffered: true,
    pageSize: 100,
    leadingBufferZone: 100,
    proxy: {
        type: 'dwr',
        storeParams: true,
        api: {
            read: UsersService.read,
            update: UsersService.update,
            destroy: UsersService.destroy,
            create: UsersService.create
        },
        extraParams:{
            param1: 'value-1',
            param2: 'value-2'
        },
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total'
        },
        writer: {
            allowSingle: false
        }
    }
});