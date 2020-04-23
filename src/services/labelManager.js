const labels = {
  Entrada: { eng: 'Entry' },
  'Mi bitácora': { eng: 'My binnacle' },
};

const labelManager = (name, language = '*') => (labels[name] ? (labels[name][language] || name) : name);

export default labelManager;
