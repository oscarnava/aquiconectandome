import Globals from '../globals';

const { DEFAULT_LANGUAGE } = Globals;

const labels = {
  Entrada: { en: 'Entry' },
  AppName: { es: 'Mi bitácora', en: 'My binnacle' },
  placeholder: { es: 'Captura aquí tus pensamientos', en: 'Capture your thoughts here' },
  linkLabel: { es: 'Aprende más', en: 'Learn more' },
  contact: { es: 'Contáctanos para sesiones privadas', en: 'Contact us for private sessions' },
};

const i18n = (name, language = DEFAULT_LANGUAGE) => (labels[name] ? (labels[name][language] || name) : name);

export default i18n;
