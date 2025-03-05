import Home from "@/src/components/Pages/home";
import Login from "@/src/components/Pages/Auth/Login";
import AuthLayout from "@/src/components/Templates/AuthLayout";
import DashboardLayout from "@/src/components/Templates/DashboardLayout";
import Products from "@/src/components/Pages/products";
import AddProduct from "@/src/components/Pages/products/AddProduct";
import ProductDetails from "@/src/components/Pages/products/ProductDetails";
import Reviews from "@/src/components/Pages/products/Reviews";
import EditProduct from "@/src/components/Pages/products/EditProduct";
import Orders from "@/src/components/Pages/orders";
import OrderDetailsPage from "@/src/components/Pages/orders/OrderDetails";
import Promo from "@/src/components/Pages/promo";
import AddPromo from "@/src/components/Pages/promo/addPromo";
import Faqs from "@/src/components/Pages/Faqs";
import BrandProfile from "@/src/components/Pages/BrandProfile";
import ContactUS from "@/src/components/Pages/contactUs";

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
