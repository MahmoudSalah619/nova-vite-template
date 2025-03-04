import { Layout } from "antd";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
// import Logo from "@/src/assets/images/Logo.png";
// import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";

function AuthLayout({
  children,
  spaceTop = "medium",
}: {
  children: ReactNode;
  spaceTop?: "medium" | "large";
}) {
  return (
    <Layout
      style={{ backgroundColor: "#fff", height: "100%", minHeight: "100vh" }}
    >
      <div className={`${styles.container} ${styles[spaceTop]}`}>
        {/* <Image src={Logo} alt="Logo" width={292} height={170} /> */}
        <Text fontSize={150}>Logo</Text>
        {children}
      </div>
    </Layout>
  );
}

export default AuthLayout;
