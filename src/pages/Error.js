import React from 'react';

const Error = () => {
  const pathname = window.location.pathname;
  return (
    <div>
      <h1>이 페이지는 존재하지 않습니다.</h1>
      <p>{pathname}</p>
    </div>
  );
};

export default Error;
