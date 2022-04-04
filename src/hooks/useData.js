import { useEffect, useState } from "react";

const useData = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((rsc) => rsc.json())
      .then((data) => setdata(data));
  }, []);
  return [data, setdata];
};

export default useData;
