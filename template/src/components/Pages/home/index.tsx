import styles from "./styles.module.scss";
import useGetUserInfo from "@/template/hooks/useGetUserInfo";
import SellerHomeView from "../../Organisms/Home/SellerHomeView";
import AdminHomeView from "../../Organisms/Home/AdminHomeView";

function Home() {
  const { role } = useGetUserInfo();

  const renderedView = {
    seller: <SellerHomeView />,
    admin: <AdminHomeView />,
  };
  return <main className={styles.container}>{renderedView[role]}</main>;
}

export default Home;
