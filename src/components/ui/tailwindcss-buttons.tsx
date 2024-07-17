import React from "react";
import { cn } from "../../utils/cn";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("flex items-center justify-center", className)}
    >
      <div className="relative z-40">{children}</div>
    </div>
  );
};
