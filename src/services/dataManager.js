const MEMO_KEY = (id) => `memo-${id}`;
const STATE_KEY = (id) => `memo-${id}`;

const dataManager = {
  putMemo: (id, memo) => { localStorage[MEMO_KEY(id)] = memo; },
  getMemo: (id) => localStorage[MEMO_KEY(id)] || '',

  putState: (id, newState) => {
    const key = STATE_KEY(id);
    const current = localStorage[key];
    const state = Object.assign(current ? JSON.parse(current) : {}, newState);
    localStorage[key] = JSON.stringify(state);
  },
  getState: (id, def) => (localStorage[STATE_KEY(id)] ? JSON.parse(localStorage[STATE_KEY(id)]) : def),
};

export default dataManager;
