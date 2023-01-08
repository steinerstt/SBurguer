interface iSnack {
  id: string;
  name: string;
  price: string;
  img: string;
  category: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  snacks_cart: iSnack[];
}

export interface iUseAuthStore {
  user: iUser;
  setUser: (user: iUser) => void;
}
