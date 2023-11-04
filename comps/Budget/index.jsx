import React from "react";
import Statichook from "@/hooks/statichook";
import { useRouter } from "next/router";
const index = ({ id, email, phone, budget, name, mess, time }) => {
  const route = useRouter();

  const { deleteContact } = Statichook();
  return (
    <>
      <div className="admin__table--body">
        <div className="">
          <div className=" admin__table--body--time">
            <img src="/asset/clock.svg" alt="" />
            {time}
          </div>
        </div>
        <div>
          <p> {phone} </p>
        </div>
        <div>
          <p> {email} </p>
        </div>
        <div>
          <p className=" text-justify"> {budget}</p>
        </div>
        <div>
          <p className=" text-justify"> {mess}</p>
        </div>
        <div>
          <div className=" mt-3">
            <a
              href=""
              onClick={async (e) => {
                e.preventDefault();
                await deleteContact(id);
                route.reload();
              }}
              className=" button-sm"
            >
              delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
