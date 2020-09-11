import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import ContactsItem from "../ContactsItem/ContactsItem";
import styles from "./contactsList.module.css";
import slideTransition from "../../transitions/slide.module.css";

function ContactsList({ contacts = [], deleteContact }) {
  return (
    <div className={styles.contactsWrap}>
      <table className={styles.list}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Handle</th>
          </tr>
        </thead>
        <TransitionGroup component="tbody">
          {contacts.map((contact, idx) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              unmountOnExit
              classNames={slideTransition}
            >
              <ContactsItem
                key={contact.id}
                contact={contact}
                deleteContact={() => deleteContact(contact.id)}
                idx={idx}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </table>
    </div>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};
