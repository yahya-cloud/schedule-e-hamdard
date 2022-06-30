import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../global/Button";
import FilterSearch from "../../global/Inputs/FilterSearch";
import ModalContainer from "../../global/Modal";
import AddClassForm from "../AddClassForm";
import AddStudentForm from "../AddStudentForm/AddStudentForm";
import AddTeacherForm from "../AddTeacherForm";

interface Props {
  userType: string;
  id: string;
}

const DynamicButton = ({ userType, id }: Props) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  let content;
  let btnText = "";

  switch (true) {
    case userType === "teacher" && pathname === `/section/${id}`:
      content = <AddClassForm handleClose={() => setOpen(false)} />;
      btnText = "Add Class";
      break;

    case userType === "admin" && pathname === `/section/${id}/teachers`:
      content = <AddTeacherForm handleClose={() => setOpen(false)} />;
      btnText = "Add Teacher";
      break;

    case userType === "admin" && pathname === `/section/${id}/students`:
      btnText = "Add Student";
      content = <AddStudentForm handleClose={() => setOpen(false)} />;
      break;

    default:
      break;
  }

  return (
    <>
      {content === undefined || btnText === "" ? (
        <></>
      ) : (
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
      )}
    </>
  );
};

export default DynamicButton;
