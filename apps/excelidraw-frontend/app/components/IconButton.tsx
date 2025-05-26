import { RectangleHorizontal } from "lucide-react";
import { ReactNode } from "react";

export function IconButton({
  icon,
  onClick,
  activated
}: {
  icon: ReactNode;
  onClick: () => void;
  activated: boolean;
}) {
  return (
    <div className={`"pointer rounded-xl p-2 bg-gray-800 " ${activated ? "bg-gray-900" : "bg-gray-800 hover:bg-gray-600"}`}
     onClick={onClick}>
      {icon}
    </div>
  );
}
