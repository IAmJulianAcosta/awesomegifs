import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'awesome-gifs/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = `${ENV.API_URL}`;
  namespace = `${ENV.API_NAMESPACE}`;
}
