"use client";

import { CaretRight, Minus, Plus, X } from "@phosphor-icons/react";
import { yachts } from "@public/data/yachts";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ShoppingCart = () => {
  //   const orders = yachts?.slice(0, 3);
  const [orders, setOrders] = useState(yachts?.slice(0, 3));
  // State to store quantity of each product
  const [quantities, setQuantities] = useState<number[]>(
    new Array(yachts.length).fill(1)
  );

  // Function to handle increase in quantity
  const increaseQuantity = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  // Function to handle decrease in quantity
  const decreaseQuantity = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  // Function to handle product deletion
  const handleDelete = (index: number) => {
    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let subtotal = 0;
    orders.forEach((item, index) => {
      subtotal += item.price * quantities[index];
    });
    return subtotal;
  };

  // Constants for delivery charge and subtotal
  const deliveryCharge = 45.0;
  const subtotal = calculateSubtotal();
  const totalPrice = subtotal + deliveryCharge;

  return (
    <section className="section-py relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">
              Delivery Charge
            </span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
            <span className="w-full max-w-[200px] text-right">Remove</span>
          </p>
        </div>

        <div>
          {orders?.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
            >
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                  <Image
                    src={item?.image[0]}
                    alt="perfume bottle image"
                    className="xl:w-[140px] h-[120px] object-cover"
                  />
                </div>
                <div className="pro-data w-full max-w-sm ">
                  <Link
                    href={`/yachts/${item?.id}`}
                    className="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
                  >
                    {item?.title}
                  </Link>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    Price
                  </p>
                  <h6 className="font-medium text-lg leading-8 text-blue-B600  max-[550px]:text-center">
                    ${item?.price}
                  </h6>
                </div>
              </div>
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center delivery-charge">
                  $15.00{" "}
                  <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                    (Delivery Charge)
                  </span>
                </h6>
                <div className="flex items-center w-full mx-auto justify-center qtySelector">
                  <button
                    onClick={() => decreaseQuantity(idx)}
                    className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent my-transition hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50 decreaseQty"
                  >
                    <Minus className=" text-blue-B900 text-[22px]" />
                  </button>
                  <input
                    type="number"
                    value={quantities[idx]}
                    className="qtyValue border-y border-gray-200 outline-none text-blue-B900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-blue-B900 py-[15px] text-center bg-transparent"
                    placeholder="1"
                  />
                  <button
                    onClick={() => increaseQuantity(idx)}
                    className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent my-transition hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50 increaseQty"
                  >
                    <Plus className=" text-blue-B900 text-[22px]" />
                  </button>
                </div>
                <h6 className="text-blue-B600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center product-price">
                  $ {item?.price * quantities[idx]}
                </h6>
                <button
                  onClick={() => handleDelete(idx)}
                  className="rounded-full bg-red-100 hover:bg-red-200 my-transition"
                >
                  <X
                    width={40}
                    height={40}
                    className="p-2 text-red-600 my-transition"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Sub Total
            </p>
            <h6 className="font-semibold text-xl leading-8 text-blue-B900 subtotal">
              ${calculateSubtotal()}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Delivery Charge
            </p>
            <h6 className="font-semibold text-xl leading-8 text-blue-B900 delivery-charge">
              ${deliveryCharge}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-blue-B900">
              Total
            </p>
            <h6 className="font-manrope font-medium text-2xl leading-9 text-brown-B300 total">
              ${totalPrice.toFixed(2)}
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <Link
            href="/sell-yacht"
            className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-brown-B75 justify-center my-transition hover:bg-brown-B200"
          >
            <span className="px-2 font-semibold text-lg leading-8 text-blue-B900">
              Back to Shopping
            </span>
            <CaretRight className="icon-24" />
          </Link>
          <Link
            href="#"
            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-blue-B900 font-semibold text-lg text-white flex my-transition hover:bg-blue-B600"
          >
            Continue to Payment
            <CaretRight className="icon-24" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
