import Route from '@ember/routing/route';

export default class GifsGifRoute extends Route {
  model(params) {
    const gif = this.store.peekRecord('gif', params.id);
    if (gif) {
      return gif;
    }
    return this.store.findRecord('gif', params.id);
  }
}
