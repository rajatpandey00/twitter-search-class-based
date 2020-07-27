import axios from 'axios';
// @flow
export const fetchProfilesSuccess = (data) => {
  return {
    type: 'FETCH_PROFILES_SUCCESS',
    data,
  };
};
export const fetchProfilesFailed = (error) => {
  return {
    type: 'FETCH_PROFILES_FAILED',
    data: error,
  };
};

const fetchProfiles = (query) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3000/getUserProfiles/${query}`)
      .then(({ data }) => {
        dispatch(fetchProfilesSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchProfilesFailed(error));
      });
  };
};

export default fetchProfiles;
