import Application from 'awesome-gifs/app';
import config from 'awesome-gifs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
