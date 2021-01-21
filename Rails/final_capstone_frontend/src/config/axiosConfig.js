import Axios from 'axios';

const base = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const checkLoggedIn = async () => {
  let loggedIn;
  if (localStorage.getItem('capstone_api')) {
    try {
      const response = await base.get('auto_login', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('capstone_api')}`,
        },
      });
      loggedIn = response.data.logged_in;
    } catch (e) {
      loggedIn = false;
    }
  }
  return loggedIn;
};

export const logout = async () => base.delete('logout');

export default base;
