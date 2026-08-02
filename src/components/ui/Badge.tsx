import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent-dark">
      {children}
    </span>
  );
}
