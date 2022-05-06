import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as url from '../url_helper';
import accessToken from '../jwt-token-access/accessToken';

import { productsData, orders, customerList } from '../../common/data';

let users = [
  {
    uid: 1,
    username: 'admin',
    role: 'admin',
    password: '123456',
    email: 'admin@themesbrand.com',
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: 'passthrough' });

  mock.onPost(url.POST_FAKE_REGISTER).reply((config) => {
    const user = JSON.parse(config['data']);
    users.push(user);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost('/post-fake-login').reply((config) => {
    const user = JSON.parse(config['data']);
    const validUser = users.filter(
      (usr) => usr.email === user.email && usr.password === user.password,
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser['length'] === 1) {
          resolve([200, validUser[0]]);
        } else {
          reject([
            'Username and password are invalid. Please enter correct username and password',
          ]);
        }
      });
    });
  });

  mock.onPost('/fake-forget-pwd').reply((config) => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, 'Check you mail and reset your password.']);
      });
    });
  });

  mock.onPost('/post-jwt-register').reply((config) => {
    const user = JSON.parse(config['data']);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost('/post-jwt-login').reply((config) => {
    const user = JSON.parse(config['data']);
    const validUser = users.filter(
      (usr) => usr.email === user.email && usr.password === user.password,
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser['length'] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            'Username and password are invalid. Please enter correct username and password',
          ]);
        }
      });
    });
  });

  mock.onPost('/post-jwt-profile').reply((config) => {
    const user = JSON.parse(config['data']);

    const one = config.headers;

    let finalToken = one.Authorization;

    const validUser = users.filter((usr) => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser['length'] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex((obj) => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            localStorage.removeItem('authUser');
            localStorage.setItem('authUser', JSON.stringify(users[objIndex]));

            resolve([200, 'Profile Updated Successfully']);
          } else {
            reject([400, 'Something wrong for edit profile']);
          }
        } else {
          reject([400, 'Invalid Token !!']);
        }
      });
    });
  });

  mock.onGet(url.GET_PRODUCTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productsData) {
          // Passing fake JSON data as response
          resolve([200, productsData]);
        } else {
          reject([400, 'Cannot get products']);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_PRODUCT).reply((config) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.product]);
        } else {
          reject([400, 'Cannot delete product']);
        }
      });
    });
  });

  mock.onGet(url.GET_ORDERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orders) {
          // Passing fake JSON data as response
          resolve([200, orders]);
        } else {
          reject([400, 'Cannot get orders']);
        }
      });
    });
  });

  mock.onGet(url.GET_CUSTOMERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (customerList) {
          // Passing fake JSON data as response
          resolve([200, customerList]);
        } else {
          reject([400, 'Cannot get customers']);
        }
      });
    });
  });
};

export default fakeBackend;
