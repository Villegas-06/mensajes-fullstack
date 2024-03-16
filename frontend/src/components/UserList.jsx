import React from "react";

const UserList = ({ users, onSelect }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} onClick={() => onSelect(user)} className="user">
          {user.username}
        </div>
      ))}
    </div>
  );
};

export default UserList;
