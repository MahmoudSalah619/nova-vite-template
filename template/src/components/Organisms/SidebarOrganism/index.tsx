import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import SidebarLink from "../../Molecules/SidebarLink";
import Text from "../../Atoms/Text";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import { generalLinks, supportLinks } from "./links";
import logoutHandler from "@/utils/logoutHandler";
import logo from "@/src/assets/icons/Logo.svg";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function SidebarOrganism() {
  const { t } = useAutoCompleteTranslation();
  const { role } = useGetUserInfo();
  const location = useLocation();
  const currentPath = location.pathname;

  const firstSegment = `/${currentPath.split("/")[1]}`;

  const mainLinks = generalLinks[role];

  const subLinks = supportLinks[role];

  return (
    <aside>
      {/* <img width={88} height={51} src={logo} alt="logo" /> */}
      <Text fontSize={52} color="primary">Logo</Text>
      <div className={styles.sidebarLinksContainer}>
        <Text
          color="grey500"
          fontSize={16}
          fontFamily="font500"
          className={styles.sidebarTitle}
          i18nKey="General"
        />
        <div className={styles.sidebarLinks}>
          {mainLinks.map((link) => (
            <SidebarLink
              key={link.href}
              icon={link.icon}
              label={link.label}
              isActive={firstSegment === link.href}
              href={link.href}
            />
          ))}
        </div>
      </div>
      {!!subLinks.length && (
        <div className={styles.sidebarLinksContainer}>
          <Text
            color="grey500"
            fontSize={16}
            className={styles.sidebarTitle}
            i18nKey="Support"
          />
          <div className={styles.sidebarLinks}>
            {subLinks.map((link) => (
              <SidebarLink
                key={link.href}
                icon={link.icon}
                label={link.label}
                isActive={firstSegment === link.href}
                href={link.href}
              />
            ))}
          </div>
        </div>
      )}

      <SidebarLink
        icon="signout"
        label={t("Sign out")}
        className={styles.signoutContainer}
        onClick={logoutHandler}
        href="/login"
        isActive={firstSegment === "/login"}
      />
    </aside>
  );
}

export default SidebarOrganism;
