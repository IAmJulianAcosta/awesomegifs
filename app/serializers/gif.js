import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class GifSerializer extends JSONAPISerializer {
  normalizeFindRecordResponse(store, primaryModelClass, payload) {
    const includedIndex = [];
    const included = [];
    const normalizedRecord = this.payloadToGif(payload.data, includedIndex, included);
    return {
      data: normalizedRecord,
      included,
      meta: payload.meta
    };
  }

  normalizeQueryResponse(store, primaryModelClass, payload) {
    const includedIndex = [];
    const included = [];
    const newPayload = {}

    newPayload.data = payload.data.map(record => {
      return this.payloadToGif(record, includedIndex, included);
    });
    newPayload.included = included;
    newPayload.meta = {...payload.pagination, ...payload.meta};
    return newPayload;
  }

  payloadToGif(record, includedIndex, included) {
    this.removeAuthor(record);

    const gif = {
      id: record.id,
      type: 'gif',
      attributes: {
        title: record.title,
        url: record.url,
        slug: record.slug,
        sourceUrl: record.source_post_url,
        createdAt: record.create_datetime,
        updatedAt: record.update_datetime,
        rating: record.rating,
        tags: record.tags,
        images: record.images,
      },
    }
    const trendingDate = new Date(record.trending_datetime);
    gif.attributes.trendingDate = !isNaN(trendingDate) ? trendingDate : null;

    if (record.user) {
      const user = record.user;
      if (!includedIndex.includes(user.username)) {
        this.addUserToPayload(gif, user, included, includedIndex);
      }
    }

    return gif;
  }

  removeAuthor(record) {
    const titleRegex = new RegExp('(.*) GIF by [A-Za-z0-9]*');
    const matches = record.title.match(titleRegex);

    if (matches && matches.length > 1) {
      record.title = matches[1];
    }
  }

  addUserToPayload(gif, user, included, includedIndex) {
    gif.relationships = {
      user: {
        data: {
          id: user.username,
          type: 'user',
        }
      }
    }

    included.push({
      id: user.username,
      type: 'user',
      attributes: {
        avatarUrl: user.avatar_url,
        profileUrl: user.profile_url,
        displayName: user.display_name,
        isVerified: user.is_verified
      }
    });

    includedIndex.push(user.username);
  }
}
