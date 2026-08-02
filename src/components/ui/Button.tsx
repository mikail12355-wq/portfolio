import Link from "next/link";
import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

const variantStyles: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm shadow-indigo-600/20",
  secondary:
    "bg-white text-zinc-900 border border-zinc-200 hover:border-accent/40 hover:bg-accent-light/40",
  ghost: "text-zinc-700 hover:text-accent",
};

const sizeStyles: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  external,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonAsLink) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
