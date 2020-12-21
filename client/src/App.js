import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterForm from './components/FilterForm';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
function App() {
  const [product, setProduct] = useState(null);
  const [currentId, setCurrentId] = useState();
  useEffect(() => {
    (async () => await fetchProduct())();
  }, []);

  const fetchProduct = async (filter) => {
    const result = await axios({
      method: 'GET',
      url: 'https://localhost:44343/api/products',
      params: filter,
    });
    setProduct(result?.data);
  };

  const fetchProductById = async (id) => {
    const result = await axios({
      method: 'GET',
      url: `https://localhost:44343/api/products/${id}`,
    });
    return result?.data;
  };

  const addProduct = async (data) => {
    const result = await axios({
      method: 'POST',
      url: 'https://localhost:44343/api/products',
      data,
    });
    console.log(result);
    await fetchProduct()
  }

  const editProduct = async (data) => {
    const result = await axios({
      method: 'PUT',
      url: `https://localhost:44343/api/products/${data.id}`,
      data,
    });
    console.log(result);
    await fetchProduct()
  }

  const deleteProduct = async (id) => {
    const result = await axios({
      method: 'DELETE',
      url: `https://localhost:44343/api/products/${id}`,
    });
    console.log(result);
    await fetchProduct()
  }

  return (
    <div className="App">
      <h1>Interview Requirements</h1>
      <hr />
        <FilterForm fetchProduct={(filter) => fetchProduct(filter)} />
      <hr />
        <AddForm addProduct={(data) => addProduct(data)}/>
        <EditForm id={currentId} editProduct={(data) => editProduct(data)} />
      <hr />
      <table>
        <thead>
          <th>Mã sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Mã vạch</th>
          <th>Mô tả ngắn</th>
          <th>Mô tả dài</th>
          <th>Tên thể loại</th>
          <th>Thao tác</th>
        </thead>
        <tbody>
          {product?.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.sku}</td>
                <td>{value.shortDescription}</td>
                <td>{value.longDescription}</td>
                <td>{value.category.name}</td>
                <td>
                  <button onClick={() => setCurrentId(value.id)}>Sửa</button>
                  <button onClick={() => deleteProduct(value.id)}>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          
        </tfoot>
      </table>
    </div>
  );
}

export default App;
