import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./fetch";
import { useState } from "react";

function PageB() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [user, loading] = useFetch(
    `https://651131d7829fa0248e3fa120.mockapi.io/api/v1/users/${id}`
  );

  const onSubmit = () => {
    fetch(`https://651131d7829fa0248e3fa120.mockapi.io/api/v1/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        name,
      }),
    })
      .then(() => navigate('/list'))
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Page B Edit Page</h1>
      <input
        type="text"
        placeholder="Name"
        defaultValue={user?.name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default PageB;
