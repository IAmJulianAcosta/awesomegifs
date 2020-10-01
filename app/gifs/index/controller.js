import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  queryParams = ['query', 'limit', 'offset', 'rating', 'lang'];

  @service
  router;

  @tracked
  query = '';

  @tracked
  limit = '';

  @tracked
  offset = '';

  @tracked
  rating = '';

  @tracked
  lang = '';

  @tracked
  searchedGifs = [];

  @action
  clear() {
    this.query = undefined;
    this.limit = undefined;
    this.offset = undefined;
    this.rating = undefined;
    this.lang = undefined;
    const forceReload = this.router.currentRouteName === 'gifs.index';
    this.transitionToRoute('gifs.index', {
      queryParams: {
        query: this.query,
        limit: this.limit,
        offset: this.offset,
        rating: this.rating,
        lang: this.lang
      }
    });
    if (forceReload) {
      getOwner(this).lookup('route:gifs.index').refresh();
    }
  }

  @action
  async querySearchGifs() {
    const searchedGifs = await this.store.query('gif', {
      type: 'all',
      query: this.query,
      offset: !isNaN(this.offset) ? this.offset : 0,
      limit: !isNaN(this.limit) ? this.limit : 25,
      rating: ['g', 'pg', 'pg-13', 'r'].includes(this.rating) ? this.rating : 'g',
      lang: 'string' === typeof this.lang ? this.lang : 'en',
    });

    this.searchedGifs = searchedGifs;
  }

  @computed('model', 'searchedGifs')
  get gifs() {

    return [...this.model, ...this.searchedGifs.toArray()];
  }
}
