import { Link, makeStyles, shorthands, Tab, Text, ToggleButton } from "@fluentui/react-components";
import React from "react";
import TaskCard from "../task-card/task-card";
import {
  bundleIcon,
  Navigation24Filled,
  Navigation24Regular,
} from "@fluentui/react-icons";
import NavItems from "./navItems";
import { navStyles } from "./NavbarStyles";

const NavigationIcon = bundleIcon(Navigation24Filled, Navigation24Regular);

export default function Navbar() {

  const [navState, setNavState] = React.useState(false);


  const styles = navStyles();

  // display navbar

  const toggleNav = React.useCallback(() => {
    return setNavState(!navState);
  },
    [navState]
  )

  return (
    <div>
      <nav className="w-100">
        {
          navState ?
            <>
              <div className={styles.activeNav} >
                <div className={styles.iconContainer} >
                  <Text as="h3" className="" title="Menu">Menu
                  </Text>
                  <ToggleButton
                    appearance="transparent"
                    onClick={() => toggleNav()}
                    icon={{ className: styles.menuIcon, children: <NavigationIcon /> }}>
                  </ToggleButton>
                </div>
                <NavItems isActive={navState}></NavItems>
              </div>
            </> :
            <>
              <div className={styles.navbar} >
                <ToggleButton
                  appearance="transparent"
                  onClick={() => toggleNav()}
                  icon={{ className: styles.menuIcon, children: <NavigationIcon /> }}>
                </ToggleButton>
                <NavItems isActive={navState}></NavItems>
              </div>
            </>
        }
      </nav>
    </div>
  )
}