import Link from "next/link";

interface BracketButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "light" | "dark";
  disabled?: boolean;
  className?: string;
}

export default function BracketButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "light",
  disabled = false,
  className = "",
}: BracketButtonProps) {
  const baseStyles =
    "inline-block font-[family-name:var(--font-roboto-mono)] text-[0.75rem] uppercase tracking-[0.12em] border px-6 py-3 transition-all duration-300 cursor-pointer";

  const variantStyles =
    variant === "light"
      ? "border-white text-white hover:bg-white hover:text-off-black"
      : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const styles = `${baseStyles} ${variantStyles} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}
