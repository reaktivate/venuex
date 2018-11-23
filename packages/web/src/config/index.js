import urlToVenueId from '../utils/urlToVenueId';

const config = {
  version: process.env.REACT_APP_VERSION,
  venueId:
    window.__VENUEX_VENUE_ID ||
    process.env.REACT_APP_VENUE_ID ||
    urlToVenueId(window.location.href),
  firebase: {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
  },
  router: {
    routes: {
      landing: '/',
      venue: '/venue',
      'venue.events': '/venue/events',
      'venue.events.add': '/venue/events/add',
      'venue.events.view': '/venue/events/:id/view',
      'venue.events.edit': '/venue/events/:id/edit',
      'venue.staff': '/venue/staff',
      'venue.billing': '/venue/billing',
      host: '/host'
    }
  }
};

export const { version, venueId, router, firebase } = config;
export default config;
