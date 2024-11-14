import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import classes from "./profile-user.module.css";

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        size="100%"             // Drawer-ul ocupă toată lățimea disponibilă
        // withCloseButton={false}
        position="right"
        className={classes.drawer}
        styles={{
          header: { backgroundColor: "aqua" },
          body: { backgroundColor: "aqua" },
          
        }}
      >
        Meow
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
