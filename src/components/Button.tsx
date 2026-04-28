interface ButtonProps {
  label: string;
  variant?: "solid" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ label, variant = "solid" }) => {
  const base = "px-6 py-2 rounded-full font-semibold transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50";

  return <button className={`${base} ${styles}`}>{label}</button>;
};
