import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataContext from "../utils/dataProvider";

// кастом хук, логика компонента списка пользователей
const useList = () => {
  const [sortedByCity, setSortedByCity] = useState(true);
  const { users } = useContext(DataContext);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // при загрузке и изменении данных пользователей или режима сортировки - произвести пересортировку списка и сохранить в state "sortedUsers"
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
    setLoading(false);
  }, [sortedByCity, users]);

  // изменить state сортировки согласно параметру и state загрузки. перенаправляем к списку, если юзер на другой странице
  const toggleSortMethod = (method) => {
    if (sortedByCity !== method) {
      setLoading(true);
      setSortedByCity(method);
    }
    if (location !== "/") {
      navigate("/");
    }
  };

  return { sortedUsers, toggleSortMethod, loading };
};

export default useList;
