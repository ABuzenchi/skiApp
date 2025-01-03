import classes from "./header.module.css";
import alpineSkiingLight from "../../assets/alpine-skiing-light.png";
import alpineSkiingDark from "../../assets/alpine-skiing-dark.png";
import { Button,Image } from "@mantine/core";
import { AiFillHome } from "react-icons/ai";
import { FaMap } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

interface HeaderProps{
  mode:"light"| "dark";
}

const Header = ({mode}:HeaderProps) => {
  const logo = mode === "dark" ? alpineSkiingDark : alpineSkiingLight;
  return (
    <div className={classes.navBar}>
      <Image src={logo} />

      <Button component="a" href="/" size="lg">
        <AiFillHome />
        Home
      </Button>

      <Button component="a" href="/resorts" size="lg">
        <FaMap />
        Resorts
      </Button>

      <Button component="a" href="/forum" size="lg">
        <MdForum />
        Forum
      </Button>

      <Button component="a" href="/user-profile" size="lg">
        <FaCircleUser />
       User Profile
      </Button>
    </div>
  );
};

export default Header;
