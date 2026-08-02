export function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), rgba(99,102,241,0) 70%)",
      }}
    />
  );
}
