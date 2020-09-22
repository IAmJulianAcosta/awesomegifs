import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class ApplicationController extends Controller {
  @service
  router;

  @action
  performSearch(query, limit, offset, rating, lang) {
    const forceReload = this.router.currentRouteName === 'gifs.index';
    this.transitionToRoute('gifs.index', {
      queryParams: {
        query, limit, offset, rating, lang
      }
    });
    if (forceReload) {
      getOwner(this).lookup('route:gifs.index').refresh();
    }
  }
}
