import classNames from "classnames";

export function Link({
  label,
  href,
  mode = "light",
}: {
  label: string;
  href: string;
  mode?: "light" | "dark";
}) {
  return (
    <a
      href={href}
      className={classNames(
        mode === "light"
          ? "border-primary text-primary hover:bg-primary hover:text-white"
          : "border-white text-white hover:bg-white hover:text-primary",
        "cursor-pointer uppercase block w-fit border-2 px-4 py-2 text-xl font-bold transition-colors",
      )}
    >
      {label}
    </a>
  );
}
