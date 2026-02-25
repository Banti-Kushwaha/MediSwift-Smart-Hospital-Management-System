import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true },
        );
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="min-h-screen bg-[#f4fbfa] p-8 md:ml-72">
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">User Messages</h1>
          <p className="text-gray-500 mt-2">
            Manage and review all contact form messages.
          </p>
        </div>

        {/* ===== Messages Grid ===== */}
        {messages && messages.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {messages.map((element) => (
              <div
                key={element._id}
                className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-[#e6f4f3]"
              >
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-[#1ba39c]">
                      First Name:
                    </span>{" "}
                    {element.firstName}
                  </p>

                  <p>
                    <span className="font-semibold text-[#1ba39c]">
                      Last Name:
                    </span>{" "}
                    {element.lastName}
                  </p>

                  <p>
                    <span className="font-semibold text-[#1ba39c]">Email:</span>{" "}
                    {element.email}
                  </p>

                  <p>
                    <span className="font-semibold text-[#1ba39c]">Phone:</span>{" "}
                    {element.phone}
                  </p>

                  {/* Message Box */}
                  <div className="mt-4 p-4 bg-[#f0fbfa] rounded-xl border border-[#d8f2ef]">
                    <span className="font-semibold text-gray-800">
                      Message:
                    </span>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {element.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 bg-white rounded-3xl shadow-xl">
            <h2 className="text-xl font-semibold text-gray-400">
              No Messages Found
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Messages;
