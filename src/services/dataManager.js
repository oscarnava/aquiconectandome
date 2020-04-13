const MEMO_KEY = (id) => `memo-${id}`;

const dataManager = {
  putMemo: (id, memo) => { localStorage[MEMO_KEY(id)] = memo; },
  getMemo: (id) => localStorage[MEMO_KEY(id)] || '',
};

export default dataManager;
