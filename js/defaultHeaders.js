var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': '3Ks5Kekdc6GfpUYmLbfC1KFyOBxNrjiaxxLvGA6u', 'X-Parse-REST-API-Key': 'uVfV1wdKrNdMK2GYXllZObfLlIbFYWNpkox5rSLH'};
            return config;
        }
    };
});