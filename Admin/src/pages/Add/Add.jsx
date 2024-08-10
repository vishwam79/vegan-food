import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
 

  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));

    console.log(data);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`,formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } 
    else{

        toast.error(response.data.message);
    }
  };

  return (
    <div className="add w-3/4 ml-[5vw] mt-[50px]  text-[#6d6d6d]">
      <form
        onSubmit={onSubmitHandler}
        className="flex-col gap-5 mb-10 lg:mr-52 "
      >
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="">
            <img 
              className="w-[120px] cursor-pointer "
              src={image?URL.createObjectURL(image):assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e)=>setImage(e.target.files[0])}
            className="p-4 "
            type="file"
            id="image "
            required
          />
        </div>

        <div className="add-product-name max-w-[40%, 280px]  flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="p-3 outline-none border-[#a9a9a9] rounded-sm border-[1px]"
            type="text"
            name="name"
            placeholder="Type here..."
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-3 outline-none border-[#a9a9a9] rounded-sm border-[1px]"
            type="text"
            rows={6}
            name="description"
            placeholder="Description here..."
          />
        </div>

        <div className="flex justify-start gap-10 items-center">
          <div className="product-category flex-col">
            <p>product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              className="p-3 outline-none border-[#a9a9a9] rounded-sm border-[1px]"
              name="category"
              id=""
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Pure veg">Pure veg</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product-price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="p-3 outline-none border-[#a9a9a9] rounded-sm border-[1px]"
              type="number"
              name="price"
              placeholder="price"
            />
          </div>
        </div>

        <button
          className="p-3 mt-5 max-w-32 bg-orange-50   font-bold border-orange-600 border-[2px] rounded-sm hover:bg-orange-600 hover:text-white"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
