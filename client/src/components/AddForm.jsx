import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AddForm({ addProduct }) {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => await fetchCategories())();
  }, []);
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const fetchCategories = async () => {
    const result = await Axios({
      method: 'GET',
      url: 'https://localhost:44343/api/categories',
    });
    setCategories(result?.data);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    addProduct(data);
    ///tesssss
  };
  return (
    <>
      <h1>Thêm sản phẩm</h1>
      <form className="add" onSubmit={onSubmit}>
        <div className="add-group">
          <label>Tên sản phẩm</label>
          <input type="text" name="name" onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Mã vạch</label>
          <input type="text" name="sku" onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Mô tả ngắn</label>
          <input type="text" name="shortDescription" onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Mô tả dài</label>
          <input type="text" name="longDescription" onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Tên thể loại</label>
          <select onChange={onChange} name="categoryId">
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Thêm</button>
      </form>
    </>
  );
}
