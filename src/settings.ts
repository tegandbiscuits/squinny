import { BehaviorSubject } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Settings {
  baseUrl?: string;
}

const SETTINGS_KEY = 'settings';

export const settings$ = new BehaviorSubject<Settings>({});

export function initSettings() {
  AsyncStorage.getItem(SETTINGS_KEY).then((rawSettings) => {
    const resolvedSettings: Settings = JSON.parse(rawSettings || '{}');
    settings$.next(resolvedSettings);
  }).catch((err) => {
    throw new Error(`Failed to load settings: ${err}`);
  });
}

export function updateSettings(newSettings: Partial<Settings>) {
  AsyncStorage
    .mergeItem(SETTINGS_KEY, JSON.stringify(newSettings))
    .then(() => {
      const oldSettings = settings$.getValue();
      settings$.next({
        ...oldSettings,
        ...newSettings,
      });
    })
    .catch((err) => {
      throw new Error(`Failed to update settings: ${err}`);
    });
}
