import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function EditForm({ 
    editProduct,
    id,
 }) {
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => await fetchCategories())();
    (async () => await fetchProductById(id))();
  }, [id]);

  const fetchProductById = async (id) => {
    const result = await Axios({
      method: 'GET',
      url: `https://localhost:44343/api/products/${id}`,
    });
    setData(result?.data);
  };
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
    editProduct(data);
  }
  return (
    <>
      <h1>Sửa sản phẩm</h1>
      <form className="add" onSubmit={onSubmit}>
      <div className="add-group">
          <label>Mã</label>
          <input type="text" name="id" value={data.id} readOnly/>
        </div>
        <div className="add-group">
          <label>Tên sản phẩm</label>
          <input type="text" name="name" value={data.name} onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Mã vạch</label>
          <input type="text" name="sku" value={data.sku}  onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Mô tả ngắn</label>
          <input type="text" name="shortDescription" value={data.shortDescription} onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Mô tả dài</label>
          <input type="text" name="longDescription" value={data.longDescription}  onChange={onChange} />
        </div>
        <div className="add-group">
          <label>Tên thể loại</label>
          <select onChange={onChange} name="categoryId" value={data.categoryId}>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Sửa</button>
      </form>
    </>
  );
}
