import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | gif', function(hooks) {
  setupTest(hooks);

  test('normalize record', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('gif');

    const included = []

    const normalizedResponse = serializer.payloadToGif(record, [], included);

    assert.equal(normalizedResponse.id, record.id);
    assert.equal(normalizedResponse.type, 'gif');
    assert.deepEqual(normalizedResponse.attributes, {
      title: "Dog Love GIF by TikTok Italia",
      url: "https://giphy.com/gifs/TikTokItalia-divertente-animali-carini-JTaHahqEVizjwKuc7e",
      slug: "TikTokItalia-divertente-animali-carini-JTaHahqEVizjwKuc7e",
      sourceUrl: "https://www.tiktok.com/it/",
      createdAt: undefined,
      updatedAt: undefined,
      rating: "g",
      tags: [],
      images,
      trendingDate: new Date("2020-08-31 04:15:11"),
    }, 'normalizes attributes');
    assert.deepEqual(normalizedResponse.relationships, {
      user: {
        data: {
          id: 'TikTokItalia',
          type: 'user',
        }
      }
    }, 'normalizes relationships');
    assert.deepEqual(included, [{
      id: "TikTokItalia",
      type: 'user',
      attributes: {
        avatarUrl: "https://media2.giphy.com/avatars/TikTokItalia/8ESFhrUvyZw8.png",
        profileUrl: "https://giphy.com/TikTokItalia/",
        displayName: "TikTok Italia",
        isVerified: true
      }
    }], 'sideload records');
  });
});


let images = {
  "original": {
    "height": "500",
    "width": "500",
    "size": "8086907",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy.gif",
    "mp4_size": "1955189",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy.mp4",
    "webp_size": "3213088",
    "webp": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy.webp",
    "frames": "56",
    "hash": "c26b1e902f5ffd93b6659c5cb158a9e1"
  },
  "downsized": {
    "height": "250",
    "width": "250",
    "size": "1296165",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-downsized.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-downsized.gif"
  },
  "downsized_large": {
    "height": "500",
    "width": "500",
    "size": "5062064",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-downsized-large.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-downsized-large.gif"
  },
  "downsized_medium": {
    "height": "400",
    "width": "400",
    "size": "3598891",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-downsized-medium.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-downsized-medium.gif"
  },
  "downsized_small": {
    "height": "200",
    "width": "200",
    "mp4_size": "151329",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-downsized-small.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-downsized-small.mp4"
  },
  "downsized_still": {
    "height": "250",
    "width": "250",
    "size": "24745",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-downsized_s.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-downsized_s.gif"
  },
  "fixed_height": {
    "height": "200",
    "width": "200",
    "size": "1036604",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200.gif",
    "mp4_size": "288942",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200.mp4",
    "webp_size": "535820",
    "webp": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200.webp"
  },
  "fixed_height_downsampled": {
    "height": "200",
    "width": "200",
    "size": "126116",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200_d.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200_d.gif",
    "webp_size": "74210",
    "webp": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200_d.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200_d.webp"
  },
  "fixed_height_small": {
    "height": "100",
    "width": "100",
    "size": "322521",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100.gif",
    "mp4_size": "84501",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100.mp4",
    "webp_size": "180782",
    "webp": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100.webp"
  },
  "fixed_height_small_still": {
    "height": "100",
    "width": "100",
    "size": "6734",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100_s.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100_s.gif"
  },
  "fixed_height_still": {
    "height": "200",
    "width": "200",
    "size": "19517",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200_s.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200_s.gif"
  },
  "fixed_width": {
    "height": "200",
    "width": "200",
    "size": "1036604",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200w.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200w.gif",
    "mp4_size": "288942",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200w.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200w.mp4",
    "webp_size": "535820",
    "webp": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200w.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200w.webp"
  },
  "fixed_width_downsampled": {
    "height": "200",
    "width": "200",
    "size": "126116",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200w_d.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200w_d.gif",
    "webp_size": "74210",
    "webp": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200w_d.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200w_d.webp"
  },
  "fixed_width_small": {
    "height": "100",
    "width": "100",
    "size": "322521",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100w.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100w.gif",
    "mp4_size": "47489",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100w.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100w.mp4",
    "webp_size": "180782",
    "webp": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100w.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100w.webp"
  },
  "fixed_width_small_still": {
    "height": "100",
    "width": "100",
    "size": "6734",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/100w_s.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=100w_s.gif"
  },
  "fixed_width_still": {
    "height": "200",
    "width": "200",
    "size": "19517",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/200w_s.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=200w_s.gif"
  },
  "looping": {
    "mp4_size": "4837855",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-loop.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-loop.mp4"
  },
  "original_still": {
    "height": "500",
    "width": "500",
    "size": "176395",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy_s.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy_s.gif"
  },
  "original_mp4": {
    "height": "480",
    "width": "480",
    "mp4_size": "1955189",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy.mp4"
  },
  "preview": {
    "height": "160",
    "width": "160",
    "mp4_size": "43458",
    "mp4": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-preview.mp4?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-preview.mp4"
  },
  "preview_gif": {
    "height": "69",
    "width": "69",
    "size": "49805",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-preview.gif?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-preview.gif"
  },
  "preview_webp": {
    "height": "94",
    "width": "94",
    "size": "29140",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/giphy-preview.webp?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=giphy-preview.webp"
  },
  "480w_still": {
    "height": "480",
    "width": "480",
    "size": "8086907",
    "url": "https://media0.giphy.com/media/JTaHahqEVizjwKuc7e/480w_s.jpg?cid=5c0f0afc6n71akdldj0hvbmd3edpl4nw55liftkd1387rvhx&rid=480w_s.jpg"
  }
}
const record = {
  type: "gif",
  id: "JTaHahqEVizjwKuc7e",
  url: "https://giphy.com/gifs/TikTokItalia-divertente-animali-carini-JTaHahqEVizjwKuc7e",
  slug: "TikTokItalia-divertente-animali-carini-JTaHahqEVizjwKuc7e",
  title: "Dog Love GIF by TikTok Italia",
  rating: "g",
  tags: [],
  source_post_url: "https://www.tiktok.com/it/",
  images,
  user: {
    "avatar_url": "https://media2.giphy.com/avatars/TikTokItalia/8ESFhrUvyZw8.png",
    "banner_image": "",
    "banner_url": "",
    "profile_url": "https://giphy.com/TikTokItalia/",
    "username": "TikTokItalia",
    "display_name": "TikTok Italia",
    "is_verified": true
  },
  trending_datetime: "2020-08-31 04:15:11"
}
