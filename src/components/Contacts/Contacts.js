import React from "react";
import { CSSTransition } from "react-transition-group";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "react-notifications/lib/notifications.css";
import Form from "../Form/Form";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import styles from "./contacts.module.css";
import popupTransition from "../../transitions/popup.module.css";
import { addContact, deleteContact, addFilter } from "../../redux/phoneActions";

const Contacts = (props) => {
  const getContact = (newContact) => {
    const { name } = newContact;
    const newName = props.contacts.some((contact) => contact.name === name);
    if (newName) {
      NotificationManager.info("This contact is already exist!");
    } else {
      return true;
    }
  };

  const filterContacts = () => {
    return props.contacts.filter((item) =>
      item.name.toLowerCase().includes(props.filter.toLowerCase())
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Phonebook</h2>
        </div>
        <div className={styles.formWrap}>
          <Form addContact={props.addContact} getContact={getContact} />
        </div>
        <h2 className={styles.contacts}>Contacts</h2>
        <CSSTransition
          in={props.contacts.length > 1}
          timeout={250}
          classNames={popupTransition}
          unmountOnExit
        >
          <Filter addFilter={props.addFilter} />
        </CSSTransition>
        <ContactsList
          contacts={filterContacts()}
          deleteContact={props.deleteContact}
        />
      </div>
        <NotificationContainer timeout={500}>
          <button className="btn btn-info"></button>
        </NotificationContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, {
  addContact,
  deleteContact,
  addFilter,
})(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
};
