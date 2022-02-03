import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../utils/dataProvider";

const useList = () => {
  const [sortedByCity, setSortedByCity] = useState(true);
  const { users } = useContext(DataContext);
  const [sortedUsers, setSortedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let sorted;
    if (sortedByCity) {
      sorted = [...users].sort((a, b) =>
        a.address.city.localeCompare(b.address.city)
      );
    } else {
      sorted = [...users].sort((a, b) =>
        a.company.name.localeCompare(b.company.name)
      );
    }
    setSortedUsers(sorted);
  }, [sortedByCity, users]);

  const toggleSortMethod = (method) => {
    setSortedByCity(method);
    navigate("/");
  };

  return { sortedUsers, toggleSortMethod };
};

export default useList;
