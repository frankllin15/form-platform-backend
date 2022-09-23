import { Box } from "../common/Box";
import { ButtonIcon } from "../common/Button";
import {
  TableIcon,
  TrashIcon,
  GearIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { mauve, gray } from "@radix-ui/colors";

export const AsideController = () => {
  return (
    <Box
      css={{
        position: "fixed",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "90%",
        height: "60px",
        bottom: 0,
        borderRadius: "10px",
        margin: "0 auto",
        padding: "1rem .5rem",
        boxShadow: "0 0 0 2px $border",
        backgroundColor: "$backgroundSecondary",
        border: "1px solid $border",

        zIndex: "100",
        "@md": {
          top: "calc(50% - 2rem)",
          right: "2rem",
          width: "60px",
          height: "300px",
          flexDirection: "column",
        },
      }}
      direction="column"
      align="center"
      gap="medium"
    >
      <ButtonIcon size={34} color={mauve.mauve11} icon={TrashIcon} />
      <ButtonIcon size={34} color={mauve.mauve11} icon={TableIcon} />
      <ButtonIcon size={34} color={mauve.mauve11} icon={GearIcon} />
      <ButtonIcon size={34} color={mauve.mauve11} icon={Link1Icon} />
    </Box>
  );
};
