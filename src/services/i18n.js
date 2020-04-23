const labels = {
  Entrada: { en: 'Entry' },
  'Mi bitácora': { en: 'My binnacle' },
};

const i18n = (name, language = '*') => (labels[name] ? (labels[name][language] || name) : name);

export default i18n;
