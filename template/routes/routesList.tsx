import Home from "@/template/src/components/Pages/home";
import Login from "@/template/src/components/Pages/Auth/Login";
import AuthLayout from "@/template/src/components/Templates/AuthLayout";
import DashboardLayout from "@/template/src/components/Templates/DashboardLayout";
import Products from "@/template/src/components/Pages/products";
import AddProduct from "@/template/src/components/Pages/products/AddProduct";
import ProductDetails from "@/template/src/components/Pages/products/ProductDetails";
import Reviews from "@/template/src/components/Pages/products/Reviews";
import EditProduct from "@/template/src/components/Pages/products/EditProduct";
import Orders from "@/template/src/components/Pages/orders";
import OrderDetailsPage from "@/template/src/components/Pages/orders/OrderDetails";
import Promo from "@/template/src/components/Pages/promo";
import AddPromo from "@/template/src/components/Pages/promo/addPromo";
import Faqs from "@/template/src/components/Pages/Faqs";
import BrandProfile from "@/template/src/components/Pages/BrandProfile";
import ContactUS from "@/template/src/components/Pages/contactUs";

export default {
  // Auth screens
  auth: [
    {
      path: "/login",
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
  ],
  // Common screens for all user types (Admin,type2)
  common: [
    {
      path: "/",
      element: (
        <DashboardLayout>
          <Home />
        </DashboardLayout>
      ),
    },
    {
      path: "/products",
      element: (
        <DashboardLayout>
          <Products />
        </DashboardLayout>
      ),
    },
    {
      path: "/products/add-product",
      element: (
        <DashboardLayout>
          <AddProduct />
        </DashboardLayout>
      ),
    },
    {
      path: "/products/product-details",
      element: (
        <DashboardLayout>
          <ProductDetails />
        </DashboardLayout>
      ),
    },
    {
      path: "/products/product-details/review",
      element: (
        <DashboardLayout>
          <Reviews />
        </DashboardLayout>
      ),
    },
    {
      path: "/products/edit-product",
      element: (
        <DashboardLayout>
          <EditProduct />
        </DashboardLayout>
      ),
    },
    {
      path: "/orders",
      element: (
        <DashboardLayout>
          <Orders />
        </DashboardLayout>
      ),
    },
    {
      path: "/orders/order-details",
      element: (
        <DashboardLayout>
          <OrderDetailsPage />
        </DashboardLayout>
      ),
    },
    {
      path: "/promo-codes",
      element: (
        <DashboardLayout>
          <Promo />
        </DashboardLayout>
      ),
    },
    {
      path: "/promo-codes/add-promo",
      element: (
        <DashboardLayout>
          <AddPromo />
        </DashboardLayout>
      ),
    },
    {
      path: "/Faqs",
      element: (
        <DashboardLayout>
          <Faqs />
        </DashboardLayout>
      ),
    },
    {
      path: "/brand-profile",
      element: (
        <DashboardLayout>
          <BrandProfile />
        </DashboardLayout>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <DashboardLayout>
          <ContactUS />
        </DashboardLayout>
      ),
    },
  ],
  // Admin screens
  admin: [],
  // [userType Name] screens
  seller: [],
};
