import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import "./ItemManage.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import ItemShop from "./ItemShop.js";
import ItemAdd from "./ItemAdd.js";
const ItemManage = (props) => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const query = new URLSearchParams(location.search);
  let title = props.search;
  if (title === null || title === undefined) {
    title = "";
  }
  const shop_id = query.get("shop_id") || "";
  const product_id = query.get("product_id") || "";
  const [modal, setModal] = useState(false);
  const isMountedRef = useRef(true);
  useEffect(() => {
    axios({
      method: "get",
      url: `${"localhost:3434"}/api/products/item/${product_id}`,
    }).then((response) => {
      if (isMountedRef.current) {
        response && setItems(response.data);
      }
    });
    return () => {
      isMountedRef.current = false;
    };
  }, [product_id]);
  const renderItemList = () => {
    return items?.map((item) => (
      <ItemShop
        key={item.item_id}
        item={item}
        shop_id={shop_id}
        product_id={product_id}
      />
    ));
  };

  const toggle = () => setModal(!modal);
  return (
    <div className="itemmanage-container">
      <button className="itemmanage-additem" onClick={toggle}>
        Add Item
      </button>
      <Modal isOpen={modal} toggle={toggle} className="itemmanage-modal">
        <ModalHeader toggle={toggle}>Add Item</ModalHeader>
        <ModalBody>
          <ItemAdd toggle={toggle} shop_id={shop_id} product_id={product_id} />
        </ModalBody>
      </Modal>
      <div className="itemmanage-itemscontainer">{renderItemList()}</div>
      <hr className="itemmanage-dash" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productR.products,
    search: state.navbarCart.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemManage);
