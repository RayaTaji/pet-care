import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import ChoosePet from "./Steps/ChoosePetStep/ChoosePet";
import Stepper from "./Stepper/Stepper";
import PetInformation from "./Steps/PetInformationStep/PetInformation";
import ChooseService from "./Steps/ChooseServiceStep/ChooseService";
import OwnerInformation from "./Steps/OwnerInformationStep/OwnerInformation";
import NotesForGroomer from "./Steps/NotesForGroomerStep/NotesForGroomer";
import Confirmation from "./Steps/ConfirmationStep/Confirmation";

interface ModalProps {
  onClose: () => void;
  children?: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
  const steps = [
    <ChoosePet />,
    <ChooseService />,
    <PetInformation />,
    <OwnerInformation />,
    <NotesForGroomer />,
    <Confirmation />,
  ];

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.container}>
        <Button
          className={styles.closeButton}
          onClick={onClose}
          variant="circular"
        >
          &times;
        </Button>
        <Stepper steps={steps} />
        {children}
      </div>
    </>
  );
}

export default Modal;
