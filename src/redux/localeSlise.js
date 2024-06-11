export const localeReducer = (state = { lang: 'uk' }, action) => {
  switch (action.type) {
    case 'locale/newLang':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};


export const changeLang = newLang => {
  return {
    type: 'locale/newLang',
    payload: newLang,
  };
};
