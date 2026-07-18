import type { ReactNode } from "react";

type SkipLinkProps = {
  children: ReactNode;
  targetId: string;
};

export function SkipLink({ children, targetId }: SkipLinkProps) {
  return (
    <a className="skip-link" href={`#${targetId}`}>
      {children}
    </a>
  );
}
