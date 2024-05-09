import React from "react";
import Statichook from "@/hooks/statichook";
import moment from "moment";
import Ppe from "../Ppe";
import Safety from "../Safety";
import { useRouter } from "next/router";
const index = ({ email, id, location, phone, tell, time }) => {
  // const route = useRouter();

  // const { deleteContact } = Statichook();
  return (
    <>
      <div className="admin__table--body">
        <div className="">
          <div className=" admin__table--body--time">
            <img src="/asset/clock.svg" alt="" />
          </div>
          <p className="p2"> {moment(time).fromNow()} </p>
        </div>
        <div>
          <p className=" p2  text-sanaccent"> {id} </p>
          <p> {location} </p>
          <h4 className=" text-sanaccent "> {phone} </h4>
          <h4 className=" text-sanaccent  font-normal "> {email} </h4>
        </div>
        <div>
          <Ppe id={id} />
        </div>
        <div>
          <Safety id={id} />
        </div>
        <div>
          <p className=" text-justify">{tell}</p>
        </div>
        <div>
          <div className=" mt-3">
            <a href="" className=" button-sm">
              delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
