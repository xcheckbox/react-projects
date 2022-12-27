export const SET_LOADING = 'SET_LOADING'
export const SET_STORIES = 'SET_STORIES'
export const REMOVE_STORY = 'REMOVE_STORY'
export const HANDLE_PAGE = 'HANDLE_PAGE'
export const HANDLE_SEARCH = 'HANDLE_SEARCH'


export const setLoading = (dispatch, payload) => {
  dispatch({
    type: SET_LOADING,
    payload,
  })
}

export const setStories = (dispatch, payload) => {
  dispatch({
    type: SET_STORIES,
    payload,
  })
}

export const handlePages = (dispatch, payload) => {
  dispatch({
    type: HANDLE_PAGE,
    payload
  })
}

export const removeStory = (dispatch, payload) => {
  dispatch({
    type: REMOVE_STORY,
    payload
  })
}

export const handleSearch = (dispatch, payload) => {
  dispatch({
    type: HANDLE_SEARCH,
    payload
  })
}

