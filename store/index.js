import create from "zustand";

export const useStore = create((set) => ({
  user: {
    username: "tesi",
  },
  jwt: null,
  auth: false,
  setUser: (payload) =>
    set(() => ({
      user: payload.user,
      jwt: payload.jwt,
    })),
  setAuth: () =>
    set(() => ({
      auth: true,
    })),
}));
