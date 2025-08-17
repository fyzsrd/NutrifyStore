import React from "react";
import { useRouteError } from "react-router-dom";

export const Error404 = () => {
  const err = useRouteError();

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mt-2">Oops! Page not found.</p>

      {/* Show status info if available */}
      {err?.status && (
        <p className="text-lg mt-2">
          {err.status} – {err.statusText}
        </p>
      )}

      {/* Debug fallback for dev mode */}
      {err?.message && <pre className="mt-4 text-red-500">{err.message}</pre>}
    </div>
  );
};
