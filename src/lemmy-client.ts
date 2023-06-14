import { LemmyHttp } from 'lemmy-js-client';
import { map } from 'rxjs';
import { settings$ } from './settings';

export default settings$.pipe<LemmyHttp | null>(
  map((settings) => {
    if (!settings.baseUrl) {
      console.debug('trying to create a lemmy instance without a baseUrl');
      return null;
    }

    console.debug('creating a lemmy instance');
    return new LemmyHttp(settings.baseUrl);
  }),
);
