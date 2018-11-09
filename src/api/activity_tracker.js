import PropTypes from 'prop-types';
import * as Constant from './constant';
import Dbhelper from '../db/realm/queries/dbhelper';

class ActivityTracker {
  constructor(id, provider, auth, logo) {
    this.id = id;
    this.provider = provider;
    this.isAvailable = Dbhelper.isExist(provider);
    this.isValide = false;
    this.authentification = auth;
    this.accessTokenKey = '';
    this.refreshTokenKey = '';
    this.accessTokenSecret = '';
    this.logo = logo;
  }
}

ActivityTracker.propTypes = {
  id: PropTypes.number.isRequired,
  provider: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  isValide: PropTypes.bool.isRequired,
  authentification: PropTypes.string.isRequired,
  accessTokenKey: PropTypes.string.isRequired,
  refreshTokenKey: PropTypes.string.isRequired,
  accessTokenSecret: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired
};

const FITBIT_TRACKER = new ActivityTracker(
  Constant.FITBIT_ID,
  Constant.FITBIT_PROVIDER,
  Constant.OAUTH2,
  Constant.FITBIT_LOGO
);

const GARMIN_TRACKER = new ActivityTracker(
  Constant.GARMIN_ID,
  Constant.GARMIN_PROVIDER,
  Constant.OAUTH2,
  Constant.GARMIN_LOGO
);

const WITHINGS_TRACKER = new ActivityTracker(
  Constant.WITHINGS_ID,
  Constant.WITHINGS_PROVIDER,
  Constant.OAUTH2,
  Constant.WITHINGS_LOGO
);

const STRAVA_TRACKER = new ActivityTracker(
  Constant.STRAVA_ID,
  Constant.STRAVA_PROVIDER,
  Constant.OAUTH2,
  Constant.STRAVA_LOGO
);

export const lstTrackers = [
  FITBIT_TRACKER,
  GARMIN_TRACKER,
  WITHINGS_TRACKER,
  STRAVA_TRACKER
];
