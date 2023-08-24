import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack: React.FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate();
  return (
    <span
      className="cursor-pointer font-medium text-sky-900 capitalize"
      onClick={() => navigate(to)}
    >
      go back
    </span>
  );
};

export default GoBack;
