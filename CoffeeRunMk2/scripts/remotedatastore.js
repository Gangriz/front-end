(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.ajax(this.serverUrl, {
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        emailAddress: key,
        coffeeOrder: val.coffee,
        size: val.size,
        flavorShot: val.flavor,
        caffeineRating: val.strength
      }),
      success: function(serverResponse) {
        console.log(serverResponse.responseText);
      },
      error: function(serverResponse) {
        alert(serverResponse.responseText);
      }
    });
  };

  RemoteDataStore.prototype.getAll = function() {
    $.ajax(this.serverUrl, {
      type: 'GET',
      success: function(serverResponse) {
        console.log(serverResponse.responseText);
      },
      error: function(serverResponse) {
        alert(serverResponse.responseText);
      }
    });
  };

  RemoteDataStore.prototype.get = function(key) {
    $.ajax(this.serverUrl, {
      type: 'GET',
      success: function(serverResponse) {
        key = serverResponse.id;
        $.get(key, function(serverResponse) {
          console.log(serverResponse);
        });
      },
      error: function(serverResponse) {
        alert(serverResponse.responseText);
      }
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + '/' + key, {
      type: 'GET',
      success: function(serverResponse) {
        key = serverResponse.id;
        $.del(key, function(serverResponse) {
          console.log(serverResponse);
        });
      },
      error: function(serverResponse) {
        alert(serverResponse.responseText);
      }
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
