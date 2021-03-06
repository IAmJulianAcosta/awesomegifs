import Transform from '@ember-data/serializer/transform';

export default class UrlTransform extends Transform {
  deserialize(serialized) {
    return this._validURL(serialized) ? serialized : null;
  }

  serialize(deserialized) {
    return deserialized;
  }

  //Borrowed from here: https://stackoverflow.com/a/5717133/1069464
  _validURL(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
}
