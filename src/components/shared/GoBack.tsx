import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <span
      className="cursor-pointer font-medium text-sky-900 capitalize"
      onClick={() => navigate(-1)}
    >
      go back
    </span>
  );
};

export default GoBack;
