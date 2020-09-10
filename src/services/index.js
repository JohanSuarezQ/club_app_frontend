const baseUrl = 'https://club-app-backend.herokuapp.com/';

export async function createUser(userData) {
  try {
    const response = await fetch(`${baseUrl}users/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    console.log('saveUser -> response', response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(user) {
  try {
    const response = await fetch(`${baseUrl}users/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    console.log('loginUser -> data', data.access_token);
    const token = await data.access_token;
    
    if (token) {
      console.log('Ok');
    } else {
      console.log('Logueate');
    }

    return token;
  } catch (error) {
    console.log(error);
  }
}
