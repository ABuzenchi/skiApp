import { Button } from "@mantine/core";
import classes from "./header.module.css"
const Header=()=> {
  return (
    <div className={classes.navBar}>
      <img src="/assets/alpine-skiing-light.png" alt="Alpine Skiing" />
    </div>
  )
}

export default Header;