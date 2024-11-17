import classes from "./header.module.css";
import alpineSkiingLight from "../../assets/alpine-skiing-light.png";
import { Button,Image } from "@mantine/core";
import { AiFillHome } from "react-icons/ai";
import { FaMap } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";


interface HeaderProps {
  mode: "light" | "dark";
  onSelectMode: (mode: "light" | "dark") => void;
}

const Header = ({ mode, onSelectMode }: HeaderProps) => {
  return (
    <div className={classes.navBar}>
      <Image src={alpineSkiingLight} />

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
      <div>
        {mode === "dark" ? (
          <Button onClick={() => onSelectMode("light")}>
            <IoSunny /> Light Mode
          </Button>
        ) : (
          <Button onClick={() => onSelectMode("dark")}>
            <IoMoon /> Dark Mode
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
