/**
 * DWR Proxy.
 *
 * @author Boris Pronin
 */
Ext.define('Ext.ux.DwrProxy', {
    extend: 'Ext.data.proxy.Server',
    alternateClassName: 'Ext.data.DwrProxy',
    alias: 'proxy.dwr',

    /**
     * Pass start, limit, page etc.
     */
    storeParams: false,

    doRequest: function (operation, callback, scope) {
        var me = this;
        var request = me.buildRequest(operation, callback, scope);

        if (operation.allowWrite()) {
            request = me.getWriter().write(request);
        }

        var dwrParams = [];
        if (operation.action === 'read') {
            if (this.storeParams === true) {
                dwrParams.push(request.params);
            }
        } else {
            dwrParams.push(Ext.isArray(request.jsonData) ? request.jsonData : [request.jsonData]);
        }

        if (Ext.Object.getKeys(this.extraParams).length !== 0) {
            dwrParams.push(this.extraParams);
        }

        dwrParams.push({
            callback: function (data) {
                me.processResponse(true, operation, request, data, callback, scope);
            },
            errorHandler: function (message) {
                me.processResponse(false, operation, request, message, callback, scope);
            },
            timeout: this.timeout,
            scope: scope
        });

        request.dwrFunction.apply(this, dwrParams);

        return request;
    },

    buildRequest: function(operation) {
        var me = this,
            params = {},
            request;

        //copy any sorters, filters etc into the params so they can be sent over the wire
        params = Ext.applyIf(params, me.getParams(operation));

        if (operation.id !== undefined && params.id === undefined) {
            params.id = operation.id;
        }

        request = new Ext.data.Request({
            params   : params,
            action   : operation.action,
            records  : operation.records,
            operation: operation,
            url      : operation.url,

            // this is needed by JsonSimlet in order to properly construct responses for
            // requests from this proxy
            proxy: me
        });

        request.dwrFunction = this.getUrl(request);
        if (!request.dwrFunction) {
            Ext.Error.raise("No DWR function specified.");
        }

        /*
         * Save the request on the Operation. Operations don't usually care about Request and Response data, but in the
         * ServerProxy and any of its subclasses we add both request and response as they may be useful for further processing
         */
        operation.request = request;

        return request;
    }

});
