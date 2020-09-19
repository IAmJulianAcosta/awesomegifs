import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  fetch() {
    this.store.query('gif', {
      query: 'dogs',
      limit: 25,
      offset: 0,
      rating: 'g',
      lang: 'en',
    });
  }
}
