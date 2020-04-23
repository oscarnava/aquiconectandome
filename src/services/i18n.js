const labels = {
  Entrada: { eng: 'Entry' },
  'Mi bitácora': { eng: 'My binnacle' },
};

const i18n = (name, language = '*') => (labels[name] ? (labels[name][language] || name) : name);

export default i18n;
