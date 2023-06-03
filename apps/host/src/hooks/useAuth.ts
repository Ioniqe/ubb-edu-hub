import { create, StoreApi, UseBoundStore } from "zustand";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { analytics, auth } from "../firebase";
import { logEvent } from "firebase/analytics";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStore {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}

const useAuthStore: UseBoundStore<StoreApi<AuthStore>> = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      login: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            set({ user: userCredential.user });

            logEvent(analytics, "login", {
              method: "emailAndPassword",
              email: email,
            });
          })
          .catch((error) => {
            throw error.message;
          });
      },
      register: async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            set({ user: userCredential.user });

            logEvent(analytics, "register", {
              method: "emailAndPassword",
              email: email,
            });
          })
          .catch((error) => {
            throw error.message;
          });
      },
      logout: async () => {
        await signOut(auth)
          .then(() => {
            set({ user: null });
          })
          .catch((error) => {
            throw error.message;
          });
      },
    }),
    {
      name: "token",
      storage: createJSONStorage(() => sessionStorage), // <==  pay attention
    }
  )
);

export default useAuthStore;
