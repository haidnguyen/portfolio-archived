import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import vi from './vi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {en, vi},
    defaultNS: 'common',
    fallbackLng: 'en',
    lng: 'vi',
  });

export default i18n;
