import { Link, makeStyles, shorthands, Tab, TabList, ToggleButton } from "@fluentui/react-components";
import React from "react";
import {
  TaskListSquareLtr24Regular,
  Person24Regular
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("20px", "0px"),
    rowGap: "20px",
  },
  tabList: {
    textDecorationLine: "none"
  }
});


interface Prop {
  isActive: boolean
}

// interface RouteProp {
//   title: String,
//   path:String,
//   icon: any,
//   tabValue: String,
//   isDisable: Boolean
// }

const navRoutes = 
  [
    {
      title: 'Login',
      path: '/login',
      icon: <Person24Regular/>,
      tabValue: "loginTab",
      isDisable: true
    },
    {
      title: 'Kanban',
      path: '/',
      icon: <TaskListSquareLtr24Regular/>,
      tabValue: "kanbanTab",
      isDisable: false
    }
  ]


export default function NavItems({isActive}: Prop) {

  const styles = useStyles();
 
  return (
    <div className={styles.root}>
      <TabList  defaultSelectedValue="kanbanTab" vertical>
        {
          navRoutes.map((route) => {
            if(!isActive) {
              return (        
                <Tab  icon={route.icon} value={route.tabValue} disabled={route.isDisable} />
              )
            }
            return(
              <Tab  title={route.title} value={route.tabValue} disabled={route.isDisable}>
                <Link disabled={route.isDisable} as="a" href={route.path}>{route.title}</Link>
              </Tab>
            )
          })
        }
      </TabList>
    </div>
  )
}