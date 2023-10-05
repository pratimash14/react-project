import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function SearchModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
        <Button type="button" onClick={props.handleClose} className="close" data-dismiss="modal" aria-hidden="true">×</Button>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
        <input type="text" placeholder="Search" onChange={props.inputData} name="search" value={props.search}/>
        <Button variant="primary" onClick={props.getSearchData}>
          Search
        </Button>
        </Form>
        </Modal.Body>
      </Modal>


     <Modal className="modalsubs" show={props.subsFlag} onHide={props.handleClose}>
        <Modal.Header>
        <Button type="button" onClick={props.handleClose} className="close" data-dismiss="modal" aria-hidden="true">×</Button>
          <Modal.Title className="subscribe">Subscribe to our newsletter</Modal.Title>
          <p>Want to be notified when our article is published? Enter your email address and name below to be the first to know.</p>
        </Modal.Header>
        <Modal.Body>
        <form >
        <Form.Group>
        <input type="text" placeholder="Name" onChange={props.subscribeFunc} name={"name"} value={props.subscribeData.name}/>
        </Form.Group><br />
        <Form.Group>
        <input type="text" placeholder="Email" onChange={props.subscribeFunc} name={"email"} value={props.subscribeData.email}/>
        </Form.Group><br />
        <Form.Group>
        <Button variant="primary" onClick={props.submitSubscribe}>
          Subscribe
        </Button>
        </Form.Group>
        </form>
        </Modal.Body>
      </Modal>


    </>
  );
}

export default SearchModal;
