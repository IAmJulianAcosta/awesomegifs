import Model, { attr, belongsTo } from '@ember-data/model';

export default class GifModel extends Model {
  @attr('string') title;
  @attr('url') url;
  @attr('string') slug;
  @attr('string') username;
  @attr('string') sourceUrl;
  @attr('date') createdAt;
  @attr('date') updatedAt;
  @attr('date') trendingDate;
  @attr('string') rating;
  @attr('array') tags;
  @attr('array') images;
  @belongsTo('user') user;
}
