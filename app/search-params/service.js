import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SearchParamsService extends Service {
  @tracked
  _query = ''

  @tracked
  _limit = 15

  @tracked
  _offset = 15

  @tracked
  _rating = 'g'

  @tracked
  _lang = 'en'

  get query() {
    return this._query
  }

  set query(_query) {
    if('string' === typeof _query) {
      this._query = _query;
    }
    else {
      console.warn('Tried to set query parameter with an invalid parameter');
    }
  }

  get limit() {
    return this._limit
  }

  set limit(_limit) {
    if(_limit !== '' &&!isNaN(_limit)) {
      this._limit = _limit;
    }
    else {
      console.warn('Tried to set limit parameter with an invalid parameter');
    }
  }

  get offset() {
    return this._offset
  }

  set offset(_offset) {
    if(_offset !== '' && !isNaN(_offset)) {
      this._offset = _offset;
    }
    else {
      console.warn('Tried to set offset parameter with an invalid parameter');
    }
  }
  get rating() {
    return this._rating
  }

  set rating(_rating) {
    if (['g', 'pg', 'pg-13', 'r'].includes(_rating)) {
      this._rating = _rating;
    }
    else {
      console.warn(`Tried to set rating parameter with an invalid parameter ${_rating}`);
    }
  }
  get lang() {
    return this._lang
  }

  set lang(_lang) {
    if('string' === typeof _lang) {
      this._lang = _lang;
    }
    else {
      console.warn('Tried to set lang parameter with an invalid parameter');
    }
  }

}
