export const logIn = (email, password) => ({
  type: "LOGIN",
  email,
  password,
});

export const logOut = () => ({
  type: "LOGOUT",
});

export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: {
      item,
    },
  });