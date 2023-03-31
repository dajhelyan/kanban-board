import { Input, useId, makeStyles, mergeClasses } from "@fluentui/react-components";
import {
  AddRegular
} from "@fluentui/react-icons";
import { appStyles } from "../../styles/app-style";
const useStyles = makeStyles({
 
});

export default function Search() {
  const styles = appStyles();
  const beforeId = useId("content-before");
  return (
      <Input  className={mergeClasses(styles.md100, styles.w100)} appearance="underline"  contentBefore={<AddRegular />} id={beforeId} placeholder="Nueva tarea" />
  )
}