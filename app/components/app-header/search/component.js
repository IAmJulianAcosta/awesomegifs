import Component from '@glimmer/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

export default class SearchComponent extends Component {
  @service
  searchParams;

  @alias('searchParams.query')
  query

  @alias('searchParams.limit')
  limit

  @alias('searchParams.offset')
  offset

  @alias('searchParams.rating')
  rating

  @alias('searchParams.lang')
  lang

  languages = [
    { value: 'en', label: 'English' },
    { value: 'sp', label: 'Español' },
    { value: 'pt', label: 'Português' },
    { value: 'it', label: 'Italiano' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
  ]

  @action
  onEnterKey(event) {
    if(event.key === 'Enter') {
      this.submit();
    }
  }

  @action
  submit() {
    this.args.searchButtonClicked(this.query, this.limit, this.offset, this.rating, this.lang);
  }
}
