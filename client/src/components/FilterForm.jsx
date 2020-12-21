import React, { useState } from 'react';

export default function FilterForm({ fetchProduct }) {
  const [filter, setFilter] = useState({
    nameProduct: '',
    nameCategory: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetchProduct(filter);
  };
  const onChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="filter" onSubmit={onSubmit}>
      <div className="filter-group">
        <label>Tên sản phẩm</label>
        <input type="text" name="nameProduct" onChange={onChange} />
      </div>
      <div className="filter-group">
        <label>Tên sản phẩm</label>
        <input type="text" name="nameCategory" onChange={onChange} />
      </div>
      <button type="submit">Tìm</button>
    </form>
  );
}
