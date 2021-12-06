import React from "react";
import Img from "../../assets/foguinho-sexshop-icone.jpg"

export const CartPage = () => {
  return (
    <div>
      <thead>
        <tr>
          <th></th>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th></th>
        </tr>
      </thead>
      <section>
        <div>
        <img src={Img} alt="" />
        <h4>SexShop</h4>
        </div>
      </section>
    </div>
  );
}