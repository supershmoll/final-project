"use client";
import { useRouter } from "next/navigation";
import { clearAuthTokens } from "../lib/auth-storage";
import { resetApolloCache } from "@/lib/apollo/client";

function useLogout() {
  const router = useRouter();

  const logoutUser = () => {
    clearAuthTokens();
    void resetApolloCache();
    router.replace("/login");
  };

  return { logoutUser };
}

export default useLogout;
