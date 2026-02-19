"use client";

import { useState, useRef, useEffect } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date" | "time" | "textarea" | "select" | "number";
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  variant?: "light" | "dark";
}

export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  options,
  placeholder,
  variant = "dark",
}: FormFieldProps) {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const textColor = variant === "dark" ? "text-charcoal" : "text-white";
  const borderColor = variant === "dark" ? "border-charcoal/30" : "border-white/30";
  const focusBorder = variant === "dark" ? "focus:border-charcoal" : "focus:border-white";
  const placeholderColor = variant === "dark" ? "placeholder:text-charcoal/40" : "placeholder:text-white/40";

  const inputClasses = `w-full bg-transparent ${textColor} ${borderColor} ${focusBorder} ${placeholderColor} border-b py-3 font-[family-name:var(--font-roboto-mono)] text-[0.8125rem] tracking-wide outline-none transition-colors duration-300`;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setSelectOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (type === "textarea") {
    return (
      <div className="mb-6">
        <label className={`block font-[family-name:var(--font-roboto-mono)] text-[0.6875rem] tracking-[0.08em] uppercase ${textColor} opacity-60 mb-1`}>
          {label}{required && "*"}
        </label>
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={3}
          className={`${inputClasses} resize-none`}
        />
      </div>
    );
  }

  if (type === "select" && options) {
    return (
      <div className="mb-6 relative" ref={selectRef}>
        <label className={`block font-[family-name:var(--font-roboto-mono)] text-[0.6875rem] tracking-[0.08em] uppercase ${textColor} opacity-60 mb-1`}>
          {label}{required && "*"}
        </label>
        <input type="hidden" name={name} value={selectValue} />
        <button
          type="button"
          onClick={() => setSelectOpen(!selectOpen)}
          className={`${inputClasses} text-left flex items-center justify-between cursor-pointer`}
        >
          <span className={selectValue ? "" : "opacity-40"}>
            {selectValue || placeholder || "Select..."}
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`transition-transform duration-200 ${selectOpen ? "rotate-180" : ""}`}
          >
            <path d="M2 4l4 4 4-4" />
          </svg>
        </button>
        {selectOpen && (
          <div className={`absolute top-full left-0 right-0 z-20 ${variant === "dark" ? "bg-white border border-charcoal/10" : "bg-off-black border border-white/10"} shadow-lg`}>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSelectValue(option.label);
                  setSelectOpen(false);
                }}
                className={`w-full text-left px-4 py-3 font-[family-name:var(--font-roboto-mono)] text-[0.8125rem] tracking-wide ${textColor} hover:bg-black/5 transition-colors duration-200 cursor-pointer`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-6">
      <label className={`block font-[family-name:var(--font-roboto-mono)] text-[0.6875rem] tracking-[0.08em] uppercase ${textColor} opacity-60 mb-1`}>
        {label}{required && "*"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={inputClasses}
      />
    </div>
  );
}
