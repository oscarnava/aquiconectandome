const urlParams = new URLSearchParams(window.location.search);
const browserLanguage = /^([^-]+)(-.*)?$/.exec(navigator.language)[1].toLowerCase();

export default {
  SOUND_URL: './snd',
  STATUS_DONE: 'DONE',
  STATUS_PENDING: 'PENDING',
  STATUS_UNAVAILABLE: 'UNAVAILABLE',
  DEFAULT_LANGUAGE: urlParams.get('lang') || browserLanguage,
};
