import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './List.css';

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col w-[70%] mt-10 mx-auto  text-gray-500">
      <p className="text-2xl font-semibold text-gray-600 mb-3">All Food Lists</p>

      <div className="list-table max-w-5xl">
        <div className="w-full list-table-format border-[1px] border-[#a9a9a9] p-4 flex flex-row justify-between">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>


        {list.map((item, index) => (
          <div key={index} className="list-table-format  gap-10 border-[1px] border-[#a9a9a9] p-3  flex flex-row justify-between items-center">
            <img className="w-10 h-10" src={`${url}/images/` + item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p className="text-red-800 border-red-700 border-[1px] rounded-full px-2 items-center text-center cursor-pointer hover:text-white hover:font-bold hover:bg-red-700">x</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default List;
