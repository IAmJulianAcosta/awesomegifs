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
      let trendingGifs = this.store.peekAll('gif');

      if (!trendingGifs.length) {
        trendingGifs = await this.fetchTrending();
      }

      return trendingGifs.filter(gif => {
        return !!gif.title.toLowerCase().includes(query.toLowerCase());
      })
    }

    return this.fetchTrending();
  }

  fetchTrending() {
    return this.store.query('gif', {
      type: 'trending',
      limit: 50,
      rating: 'g',
    });
  }
}
