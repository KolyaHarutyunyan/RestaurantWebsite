import { Container } from "./style";
import {
  Typography,
  Input,
  Textarea,
  FileUpload,
  Button,
} from "@eachbase/components";
import { useState } from "react";

export const MenuItemForm = () => {
  const [itemIcon, setItemIcon] = useState({
    files: [],
    mainImageId: "",
  });

  return (
    <Container>
      <Typography className="title" color="text" weight="bold">
        Add Menu Item
      </Typography>
      <form>
        <div className="box">
          <Input placeholder="Menu Item Name" />
          <Input type="number" placeholder="Price" />
        </div>
        <Textarea placeholder="Add Ingridients..." />
        <Input placeholder="Special Offers e.g. add chili sauce $2" />
        <FileUpload
          files={itemIcon.files}
          onChange={(files, actionType, mainImageId) =>
            setItemIcon(files, actionType, mainImageId)
          }
          limit={6}
          mainImageId={itemIcon.mainImageId}
        />
        <Button square>Add</Button>
      </form>
    </Container>
  );
};
