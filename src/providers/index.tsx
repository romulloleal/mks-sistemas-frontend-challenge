import { QueryProvider } from "./QueryProvider";
import { ReduxProvider } from "./ReduxProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
  );
};
