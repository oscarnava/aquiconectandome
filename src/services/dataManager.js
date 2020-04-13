const MEMO_KEY = (id) => `memo-${id}`;

const dataManager = {
  putMemo: (id, memo) => {
    console.log('putMemo', { id, memo });
    localStorage[MEMO_KEY(id)] = memo;
  },

  getMemo: (id) => {
    const memo = localStorage[MEMO_KEY(id)] || '';
    console.log('getMemo', { id, memo });
  },
};

export default dataManager;
