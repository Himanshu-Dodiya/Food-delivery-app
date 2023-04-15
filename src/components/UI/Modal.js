import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick= {props.onCloseCart}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const PortalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart = {props.onCloseCart} />,PortalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </Fragment>
  );
};
export default Modal;
