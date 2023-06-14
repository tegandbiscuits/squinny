import { useEffect, useState } from 'react';
import { LemmyHttp } from 'lemmy-js-client';
import useSettings from './useSettings';

function useLemmy(): { lemmy?: LemmyHttp } {
  const { settings } = useSettings();
  const [lemmy, setLemmy] = useState<LemmyHttp | undefined>();

  useEffect(() => {
    // TODO: there might be an edge case where baseUrl should be removed and the instance wiped
    if (settings.baseUrl) {
      console.debug('creating a new LemmyHttp instance');
      setLemmy(new LemmyHttp(settings.baseUrl));
    }
  }, [settings.baseUrl, setLemmy]);

  return { lemmy };
}

export default useLemmy;
