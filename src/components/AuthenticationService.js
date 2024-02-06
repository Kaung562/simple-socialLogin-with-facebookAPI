import axios from 'axios';

const AuthenticationService = {
  login: async (username, password) => {
    // Simulating API call, replace with actual authentication logic
    return axios.post('http://localhost:9090/api/login', { username, password });
  },
};

export default AuthenticationService;