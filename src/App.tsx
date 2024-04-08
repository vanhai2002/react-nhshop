import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Shop from "./components/Shop";
import Home from "./components/Home";
import CheckOut from "./components/checkOut";
import ProductsDetail from "./components/productsDetail";
import Cart from "./components/Cart";
import LayoutAdmin from "./components/admin/LayoutAdmin";
import ProductPage from "./components/admin/ProductPage";
import ProductAddPage from "./components/admin/ProductAddPage";
import ProductEditPage from "./components/admin/ProductEditPage";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./components/NotFoundPage";
import ShopCategory from "./components/ShopCategory";
import AdminCategory from "./components/admin/AdminCategory";
import AddCategory from "./components/admin/AddCategory";
import EditCategory from "./components/admin/EditCategory";
import Singup from "./components/Singup";
import AddTags from "./components/admin/AddTags";
import Admintags from "./components/admin/Admintags";
import EditTags from "./components/admin/EditTags";
import Attributes from "./components/admin/Attributes";
import AttributesPage from "./components/admin/AttributesPage";
import AddAttributes from "./components/admin/AddAttributes";
import SizePage from "./components/admin/SizePage";
import AddSize from "./components/admin/AddSize";
import EditSize from "./components/admin/EditSize";
import AttributesValuePage from "./components/admin/AttributesValuePage";
import EditAttributesValue from "./components/admin/EditAttributesValue";
import Singin from "./components/admin/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<Singin />} />
            <Route path="/category/:id" element={<ShopCategory />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Singup />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<ProductPage />} />
            <Route path="add" element={<ProductAddPage />} />
            <Route path="attributes/add/:id" element={<AddAttributes />} />
            <Route path="attributesValue/:id" element={<AttributesValuePage />} />
            <Route path="attributesValue/:id/edit" element={<EditAttributesValue />} />
            <Route path="attributes/:id" element={<AttributesPage />} />
            <Route path="tags" element={<Admintags />} />
            <Route path="size" element={<SizePage />} />
            <Route path="size/add" element={<AddSize />} />
            <Route path="size/:id/edit" element={<EditSize />} />
            <Route path="tags/add" element={<AddTags />} />
            <Route path="category" element={<AdminCategory />} />
            <Route path="category/add" element={<AddCategory />} />
            <Route path="category/:id/edit" element={<EditCategory />} />
            <Route path="tags/:id/edit" element={<EditTags />} />
            <Route path="product/:id/edit" element={<ProductEditPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
