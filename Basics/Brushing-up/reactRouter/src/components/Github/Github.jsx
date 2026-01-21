import React, { useEffect, useState } from "react";
import { data } from "react-router";

function Github() {
  const [data, setData] = useState([]);
  useEffect;
  () => {
    fetch("https://api.github.com/users/Meet-510")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      }, []);
  };
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github followers: {data.followersg}
    </div>
  );
}

export default Github;
