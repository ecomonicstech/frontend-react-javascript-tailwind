"use client";
import { instance } from "@/src/config/axiosInstance";
import axios from "axios";
import React, { useState } from "react";

const CustomersPage = () => {
  console.log(process.env.BASE_URL);
  interface objects {
    firstName: string;
    LastName: string;
    created_on: string;
  }
  interface list {
    customers: objects[];
  }
  const [customers, setCustomers] = useState<list>({
    customers: [{ firstName: "", LastName: "", created_on: "" }],
  });
  console.log(customers);
  const apiCall = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/list");

      setCustomers({ customers: response.data });
    } catch {
      console.log("ERROR");
    }
  };
  return (
    <div>
      <h1
        className="text-white"
        onClick={() => {
          apiCall();
        }}
      >
        Customers Page
      </h1>
      {customers.customers.length && (
        <div>
          {customers.customers.map((item) => {
            return (
              <>
                <div>{item.firstName}</div>
                <div>{item.LastName}</div>
                <div>{item.created_on}</div>
              </>
            );
          })}
        </div>
      )}
      {/* Add your component content here */}
    </div>
  );
};

export default CustomersPage;
