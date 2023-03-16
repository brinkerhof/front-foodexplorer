import React, { useEffect } from "react";
import { api } from "../../services/api";

const Home = () => {
  const [plates, setPlates] = useState([]);

  const getPlates = async () => {
    try {
      const { data } = await api.get("/plates");
      setPlates(data);
    } catch (error) {}
  };
  useEffect(() => {
    getPlates();
  }, []);

  return <div></div>;
};

export default Home;
