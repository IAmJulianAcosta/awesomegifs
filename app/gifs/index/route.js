import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GifsRoute extends Route {
  @service
  searchParams;

  async model({ query, offset, limit, rating, lang }) {
    this.searchParams.query = query;
    this.searchParams.offset = offset;
    this.searchParams.limit = limit;
    this.searchParams.rating = rating;
    this.searchParams.lang = lang;

    if('string' === typeof query && query !== '') {
      return this.store.query('gif', {
        type: 'all',
        query: query,
        offset: !isNaN(offset) ? offset : 0,
        limit: !isNaN(limit) ? limit : 25,
        rating: ['g', 'pg', 'pg-13', 'r'].includes(rating) ? rating : 'g',
        lang: 'string' === typeof lang ? lang : 'en',
      });
    }

    return this.store.query('gif', {
      type: 'trending',
      limit: 25,
      rating: 'g',
    });
  }
}
