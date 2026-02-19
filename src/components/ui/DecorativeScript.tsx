interface DecorativeScriptProps {
  className?: string;
}

export default function DecorativeScript({
  className = "",
}: DecorativeScriptProps) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <span className="font-[family-name:var(--font-garamond)] text-[clamp(6rem,15vw,12rem)] leading-none italic opacity-10 whitespace-nowrap">
        Cuvée Club
      </span>
    </div>
  );
}
