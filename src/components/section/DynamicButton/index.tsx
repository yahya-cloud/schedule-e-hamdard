import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../global/Button";
import FilterSearch from "../../global/Inputs/FilterSearch";
import ModalContainer from "../../global/Modal";
import AddClassForm from "../AddClassForm";
import AddTeacherForm from "../AddTeacherForm";

interface Props {
  userType: string;
  id: string;
}

const DynamicButton = ({ userType, id }: Props) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  let condition1 = userType === "admin" && pathname === `/section/${id}`;
  let condition2 =
    userType === "admin" && pathname === `/section/${id}/teachers`;

  let content;
  let btnText = "";

  if (condition1) {
    content = <AddClassForm />;
    btnText = "Add Class";
  } else if (condition2) {
    content = <AddTeacherForm />;
    btnText = "Add Teacher";
  }

  return (
    <>
      {" "}
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        color="primary"
        text={btnText}
      />
      <ModalContainer open={open} handleClose={() => setOpen(false)}>
        {content}
      </ModalContainer>
    </>
  );
};

export default DynamicButton;
