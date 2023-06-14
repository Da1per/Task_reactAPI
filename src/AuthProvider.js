

const authProvider = {
    login:  ({ email, password }) =>  {
        const request = new Request('http://3.65.149.62/test-api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(auth => {
            console.log(request)
            localStorage.setItem('auth', JSON.stringify(auth));
        })
        .catch(() => {
            throw new Error('Network error')
        });
    },
    checkAuth: () => {
        // Required for the authentication to work
        return Promise.resolve();
    },
    getPermissions: () => {
        // Required for the authentication to work
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve('/login');
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
};




export default authProvider;