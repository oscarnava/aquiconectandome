import Globals from '../globals';

const { STATUS_DONE, DEBUG_MODE } = Globals;
const MEMO_KEY = (id) => `memo-${id}`;
const STATE_KEY = (id) => `state-${id}`;
const START_DATE_KEY = 'bitacora-start';

const dataManager = {
  getToday: () => Math.floor(new Date() / 86400000),

  putMemo: (id, memo) => { localStorage[MEMO_KEY(id)] = memo.trim(); },
  getMemo: (id) => localStorage[MEMO_KEY(id)] || '',

  putState: (id, newState) => {
    const key = STATE_KEY(id);
    const current = localStorage[key];
    const state = Object.assign(current ? JSON.parse(current) : {}, newState);
    localStorage[key] = JSON.stringify(state);
  },
  getState: (id, def = {}) => Object.assign(def, localStorage[STATE_KEY(id)] ? JSON.parse(localStorage[STATE_KEY(id)]) : null),

  getStartDay() {
    if (!localStorage[START_DATE_KEY]) {
      localStorage[START_DATE_KEY] = this.getToday();
    }
    return +localStorage[START_DATE_KEY];
  },

  cardDone(id) {
    const { status } = this.getState(id, { status: null });
    return status === STATUS_DONE || DEBUG_MODE;
  },

};

export default dataManager;
