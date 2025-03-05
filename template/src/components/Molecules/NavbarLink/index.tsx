import { useLocation, Link, To } from "react-router-dom";
import { useMemo } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import HeaderRightArrow from "@/src/assets/icons/navbar/header-right-arrow.svg";
import Image from "../../Atoms/Image";

function NavbarLink() {
  const location = useLocation();
  const pathnames = useMemo(() => {
    const tempArr: string[] = [];
    location.pathname.split("/").forEach((x) => {
      if (x.trim()) {
        if (x?.includes("sub-categories") && location.search) {
          const decodedParam = decodeURIComponent(
            location.search.split("=")[1]
          );
          tempArr.push(decodedParam.replace(/\s+/g, " "));
        } else {
          tempArr.push(x);
        }
      }
    });
    return tempArr;
  }, [location]);

  const formatSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={styles.navbarLink}>
      <div className={styles.homeContainer}>
        <Link to="/" className={styles.textStyle}>
          <Text
            color="grey900"
            fontFamily="font500"
            fontSize={16}
            i18nKey="Home"
          />
        </Link>
        {pathnames.length > 0 && (
          <Image
            src={HeaderRightArrow}
            width={6.55}
            height={11.55}
            alt="right arrow"
          />
        )}
      </div>
      {pathnames.map((segment, index) => {
        // const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div className={styles.navbarLink} key={segment}>
            {isLast ? (
              <Text color="primary" fontFamily="font500" fontSize={16}>
                {formatSegment(segment)}
              </Text>
            ) : (
              <Link to={index + 1 - pathnames.length as To}>
                <Text color="grey900" fontFamily="font500" fontSize={16}>
                  {formatSegment(segment)}
                </Text>
              </Link>
            )}
            {!isLast && (
              <Image
                src={HeaderRightArrow}
                width={6.55}
                height={11.55}
                alt="right arrow"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default NavbarLink;
