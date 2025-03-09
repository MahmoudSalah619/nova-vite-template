import { Layout } from "antd";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
// import Logo from "@/src/assets/icons/auth/auth-logo.svg";
// import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

function AuthLayout({
  children,
  formTitle,
  layoutText,
}: {
  children: ReactNode;
  formTitle?: TranslationKeyEnum;
  layoutText?: TranslationKeyEnum;
}) {
  return (
    <Layout
      style={{ backgroundColor: "#fff", height: "100%", minHeight: "100vh" }}
    >
      <div className={`${styles.container}`}>
        <div className={styles.layoutSidePanel}>
          {/* <Image src={Logo} alt="Logo" width={305} height={84} /> */}
          <Text fontSize={104} fontFamily="font700" color="light">
            Logo
          </Text>

          <Text
            className={styles.layoutText}
            i18nKey={layoutText}
            color="light"
            fontSize={36}
          />
        </div>

        <div className={styles.layoutContent}>
          {formTitle && (
            <Text
              className={styles.formTitle}
              i18nKey={formTitle}
              fontSize={36}
            />
          )}
          {children}
        </div>
      </div>
    </Layout>
  );
}

export default AuthLayout;
