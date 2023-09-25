import { useNavigate } from "react-router-dom";
import useFetch from "./fetch";
function PageA() {
  const [users, loading] = useFetch(
    "https://651131d7829fa0248e3fa120.mockapi.io/api/v1/users"
  );

  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      Page A List Page <button onClick={() => navigate(`/list/create`)}>create</button>
      <ul>
        {users?.map((data, index) => (
          <li key={index} onClick={() => navigate(`/list/${data?.id}`)}>
            {data?.name || "-"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageA;
