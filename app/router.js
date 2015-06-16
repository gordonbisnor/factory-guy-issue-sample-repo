import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
  this.route('popout');

  this.modal('show-modal', {
    withParams: ['show_id'], otherParams: 'show'
  });

  this.resource('shows', function() {
    this.route('show', {path: '/show/:show_id'});
  });

  this.route('contact');
  
  this.route('schedule');

  this.route('privacy');
  this.route('disclaimer');

  this.resource('about', function() {
    this.route('advertising-with-ckdu');
    this.route('policies-and-training');
    this.route('faq');
    this.route('history');
    this.route('people');
    this.route('news-item', {path: '/news-item/:news_item_id'});
  });

  this.resource('events', function() {
    this.route('event', {path: '/event/:event_id'});
  });

  this.route('archives');
  
  this.resource('charts', function() {
    this.route('chart', {path: '/chart/:chart_id'});
  });

});

export default Router;
