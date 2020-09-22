import EmberRouter from '@ember/routing/router';
import config from 'awesome-gifs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('gifs', function() {
    this.route('gif', { path: ':id'});
  });
});
