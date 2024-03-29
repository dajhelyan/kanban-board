import {
  Link,
  makeStyles,
  mergeClasses,
  shorthands,
  Tab,
  Text,
  ToggleButton,
} from "@fluentui/react-components";
import React from "react";
import TaskCard from "../task-card/task-card";
import {
  bundleIcon,
  NavigationFilled,
  NavigationRegular,
} from "@fluentui/react-icons";
import NavItems from "./navItems";
import { navStyles } from "./Navbar-styles";

const NavigationIcon = bundleIcon(NavigationFilled, NavigationRegular);

export default function Navbar() {
  const [navState, setNavState] = React.useState(false);

  const styles = navStyles();

  // display navbar

  const toggleNav = React.useCallback(() => {
    return setNavState(!navState);
  }, [navState]);

  return (
    <>
      <nav className={styles.sidebar}>
        {navState ? (
          <>
            <div
              className={mergeClasses(styles.activeNav, styles.sidebarCommon)}
            >
              <div className={styles.iconContainer}>
                <Text as="h3" className="" title="Menu">
                  Menu
                </Text>
                <ToggleButton
                  appearance="transparent"
                  onClick={() => toggleNav()}
                  icon={{
                    className: styles.menuIcon,
                    children: <NavigationIcon />,
                  }}
                ></ToggleButton>
              </div>
              <NavItems isActive={navState}></NavItems>
            </div>
          </>
        ) : (
          <>
            <div className={mergeClasses(styles.sidebar, styles.sidebarCommon)}>
              <ToggleButton
                appearance="transparent"
                onClick={() => toggleNav()}
                icon={{
                  className: styles.menuIcon,
                  children: <NavigationIcon />,
                }}
              ></ToggleButton>
              <NavItems isActive={navState}></NavItems>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
