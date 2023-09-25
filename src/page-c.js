import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PageC() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const onSubmit = () => {
    fetch("https://651131d7829fa0248e3fa120.mockapi.io/api/v1/users", {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
    }).then(() => navigate("/list"));
  };

  return (
    <div>
      <h1>Page C Create Page</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default PageC;
