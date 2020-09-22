import Component from '@glimmer/component';
import {action} from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class LogoComponent extends Component {
  @tracked
  short = false;

  @action
  toggle() {
    this.short = !this.short;
  }
}
