const defaultState = {
    currentUsers: {},
    tweets: [],
    status: false,
    tweetsFetched: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_PROFILES_SUCCESS':
            return Object.assign({}, state,
                {
                    ...state,
                    currentUsers: [...action.data],
                    status: true
                })
        case 'FETCH_PROFILES_FAILED':
            return state
        default:
            return state;
    }
}

export default reducer;