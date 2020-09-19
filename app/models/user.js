import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('url') avatarUrl
  @attr('url') profileUrl
  @attr('string') displayName
  @attr('boolean') isVerified
  @hasMany('gif') gifs
}
