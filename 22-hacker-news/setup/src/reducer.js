import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, { type, payload }) => {

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload }
    case SET_STORIES:
      return {
        ...state,
        news: payload.hits,
        page: payload.page,
        totalPages: payload.nbPages,
        loading: false,
    }
    case REMOVE_STORY:
      const newsFiltered = state.news.filter(item => item.objectID !== payload);
      return { ...state, news: newsFiltered }
    case HANDLE_PAGE:
      return { ...state, page: payload }
    case HANDLE_SEARCH:
      return { ...state, search: payload, page: 0 }
    default:
      return { ...state };
  }
}

export default reducer
