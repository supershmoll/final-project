"use client";

import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apollo/client";
import { purgeExpiredAuthTokens } from "@/features/auth/lib/auth-storage";
import { PreferencesProvider } from "@/lib/preferences/PreferencesProvider";

function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    purgeExpiredAuthTokens();
  }, []);

  return (
    <PreferencesProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </PreferencesProvider>
  );
}

export default Providers;
