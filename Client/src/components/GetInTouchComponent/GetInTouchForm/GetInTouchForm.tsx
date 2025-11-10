import React from "react";
import styles from "./GetInTouchForm.module.scss";
import TextBox from "../../TextBox/TextBox";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";
import paperPlane from "../../../assets/icons/mail.png";
export default function GetInTouchForm() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>We'd Love to Hear From You!</h2>
        <p>
          Please fill out the form below and we will get back to you as soon as
          possible.
        </p>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.nameContainer}>
          <TextBox label="First Name" placeholder="Enter First Name" />
          <TextBox label="Last Name" placeholder="Enter Last Name" />
        </div>
        <TextBox label="Email" placeholder="Enter Email" />
        <TextArea label="Message" placeholder="What's on your mind?" />
        <Button
          children={
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                Send Message
                <img
                  src={paperPlane}
                  alt="paper-plane"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginInlineStart: "10px",
                  }}
                />
              </div>
            </>
          }
          variant="tertiary"
          className={styles.button}
        />
      </div>
    </div>
  );
}
