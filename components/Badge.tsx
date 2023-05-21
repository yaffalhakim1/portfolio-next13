import React from "react";

interface BadgeProps {
  techstack?: string | undefined;
  logo1?: React.ReactNode;
  logo2?: React.ReactNode;
}

function Badge({ techstack, logo1, logo2 }: BadgeProps) {
  return (
    <span className="text-xs font-medium inline-flex items-center px-2.5 py-1 rounded mr-2 border border-gray-500">
      {logo1}
      {logo2}
      {techstack}
    </span>
  );
}

export default Badge;
