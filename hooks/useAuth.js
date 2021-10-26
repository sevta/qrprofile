import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useStore } from "../store";

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useStore();
  const router = useRouter();

  useEffect(() => {
    console.log("is auth", auth);
    if (auth) {
      router.replace("/");
    }
  }, [auth]);

  return {
    auth,
  };
}
