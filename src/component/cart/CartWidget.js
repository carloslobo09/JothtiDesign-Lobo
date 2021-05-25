import React,{useState} from "react";
import Content from './Animation/Content';

function CartWidget() {
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <div className="btn btn-lg btn-outline-success">
      <Content {...{ sideBar, setSideBar}} />
    </div>
  );
}
export default CartWidget;   

