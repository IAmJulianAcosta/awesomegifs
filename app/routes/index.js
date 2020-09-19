import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return this.store.query('gif', {
      query: 'dogs',
      limit: 25,
      offset: 0,
      rating: 'g',
      lang: 'en',
    });
  }
}
