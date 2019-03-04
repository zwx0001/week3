import { handleActions } from 'redux-actions';

export default handleActions(
  {
    ['ADD'](state, action) {
      let flag = true;
      state.map(item => {
        if (item.nm === action.payload.nm) {
          action.payload.num += 1;
          flag = false;
        }
      });
      if (flag) {
        action.payload.num += 1;
        state.push(action.payload);
      }
      return state;
    },
    ['PRO'](state, action) {
      let { val, flag } = action.payload;
      if (action.payload.flag) {
        state.map(item => {
          if (item.nm === val.nm) {
            item.num++;
          }
        });
      } else {
        state.map(item => {
          if (item.nm === val.nm) {
            if (item.num === 1) {
              item.num = 1;
              return;
            }
            item.num--;
          }
        });
      }
      return state;
    },
    ['CK'](state, action) {
      state.map(item => {
        if (item.nm === action.payload.nm) {
          item.ck = !item.ck;
        }
      });
      return state;
    },
    ['CKALL'](state, action) {
      state.map(item => {
        item.ck = action.payload;
      });
      return state;
    }
  },
  []
);
