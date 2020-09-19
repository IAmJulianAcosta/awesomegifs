import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'soapbox/config/environment';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch(this._buildURL());
    console.log(response);
    return response.json();
  }
  _buildURL() {
    return `${ENV.API_URL}/v1/gifs/search?api_key=${ENV.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en`
  }
}
