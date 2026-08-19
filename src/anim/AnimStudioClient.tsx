// @ts-nocheck
import { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { runSecurityShield } from "./utils/securityGuard";

const App = lazy(() => import("./App"));

export default function AnimStudioClient() {
  useEffect(() => {
    runSecurityShield();
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </ErrorBoundary>
  );
}