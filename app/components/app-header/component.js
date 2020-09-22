import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class AppHeaderComponent extends Component {
  @tracked
  searching = false;

  @action
  onSearchButtonClicked(...args) {
    if(this.searching) {
      this.args.performSearch(...args)
    }
    this.searching = !this.searching;
  }
}
