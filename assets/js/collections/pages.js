// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var $, Backbone, Page, _;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    require('models/page');
    (function() {});
    return Page = (function(_super) {

      __extends(Page, _super);

      function Page() {
        return Page.__super__.constructor.apply(this, arguments);
      }

      Page.prototype.model = Page;

      return Page;

    })(Backbone.Collection);
  });

}).call(this);
