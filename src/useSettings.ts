import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Settings {
  baseUrl?: string;
}

const SETTINGS_KEY = 'settings';

interface HookValues {
  settings: Settings,
  updateSettings: (newSettings: Partial<Settings>) => void;
}

function useSettings(): HookValues {
  const [settings, setSettings] = useState<Settings>({});

  useEffect(() => {
    AsyncStorage.getItem(SETTINGS_KEY).then((rawSettings) => {
      let resolvedSettings: Settings;
      if (rawSettings) {
        try {
          resolvedSettings = JSON.parse(rawSettings);
        } catch {
          resolvedSettings = {};
        }
      } else {
        resolvedSettings = {};
      }

      setSettings(resolvedSettings);
    }).catch((err) => {
      throw new Error(`Failed to load settings: ${err}`);
    });
  }, [setSettings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    AsyncStorage
      .mergeItem(SETTINGS_KEY, JSON.stringify(newSettings))
      .then(() => {
        setSettings((oldSettings) => ({
          ...oldSettings,
          ...newSettings,
        }));
      })
      .catch((err) => {
        throw new Error(`Failed to update settings: ${err}`);
      });
  };

  return { settings, updateSettings };
}

export default useSettings;
