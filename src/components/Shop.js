import React from "react";
import { Provider, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";


function Shop() {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <h2 className="my-5">Deposit/ Withdraw Money</h2>
      <button className="btn btn-primary" onClick={()=>withdrawMoney(100)}>-</button>
      <b style={{ fontSize: "20px" }} className="mx-2">
        Change Balance
      </b>
      <button className="btn btn-primary" onClick={()=>depositMoney(100)}>+</button>
    </>
  );
}

export default Shop;
