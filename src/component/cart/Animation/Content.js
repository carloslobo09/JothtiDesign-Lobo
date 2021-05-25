import React from "react";
import { motion } from "framer-motion";
import { useCartContext } from "../../../context/cartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Content=({ sideBar, setSideBar})=> {
  const {getUnits}= useCartContext();
    return (
    <motion.div className='div'
        animate={{
          scale: 1.2,
          opacity: 1
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      >
        
        <motion.i  onClick={() => setSideBar((sideBar) => !sideBar)}>{sideBar}</motion.i>Carrito <FontAwesomeIcon icon={faShoppingCart} /> <span >{getUnits()}</span>
    </motion.div>
    );
}
export default Content;