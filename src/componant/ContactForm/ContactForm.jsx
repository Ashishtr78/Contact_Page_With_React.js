import React, { useState } from "react";
import styles from "./contactform.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import { DiFirebase } from "react-icons/di";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    text: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHACT" icon={<MdMessage />} />
            <Button text="VIA CALL" icon={<FaPhoneAlt />} />
          </div>
          <Button text="VIA EMAIL FORM" icon={<HiMail />} isOutline={true} />
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="test">test</label>
              <input name="text" value={contact.text} onChange={handleChange} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                textAlign: "center",
              }}
            >
              <Button text="Summit button" />
            </div>
          </form>
        </div>
        {contact.name + " " + contact.email + " " + contact.text}
        <div className={styles.contact_Image}>
          <img src="public\images\contact.svg" alt="Contact_inage" />
        </div>
        
      </div>
     
    </section>
  );
};

export default ContactForm;
