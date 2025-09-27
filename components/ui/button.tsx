
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" };
export function Button({ className, variant="primary", ...props }: Props){
  const styles = clsx("btn", variant === "primary" ? "btn-primary" : "btn-outline", className);
  return <button {...props} className={styles} />;
}
