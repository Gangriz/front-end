eval(require('fs').readFileSync('test_datastore.js', 'utf8'));
eval(require('fs').readFileSync('test_truck.js', 'utf-8'));

(function(window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('Nebuchadnezzar', new DataStore());
  window.myTruck = myTruck;
})(window);
