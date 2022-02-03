import React from "react";
import { Link, useOutletContext } from "react-router-dom";

import "../styles/UserList.scss";

const UserList = () => {
  const [sortedUsers] = useOutletContext();

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id} className="list-item">
            <div>
              <div>
                <span>ФИО: </span>
                {user.name}
              </div>
              <div>
                <span>город: </span>
                {user.address.city}
              </div>
              <div>
                <span>компания: </span>
                {user.company.name}
              </div>
            </div>
            <div className="list-link-container">
              <Link to={`/profile/${user.id}`}> Подробнее</Link>
            </div>
          </li>
        ))}
      </ul>
      <h3>Найдено {sortedUsers.length} пользователей</h3>
    </div>
  );
};

export default UserList;
