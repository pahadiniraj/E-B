import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import AddButton from "../../Button/AddButton";

const ContactBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    subject: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      title: "",
      subject: "",
    });
    console.log(formData);
  };

  return (
    <div className="py-10 bg-slate-50 ">
      <div className="  container mx-auto px-32">
        <div className=" flex w-full  gap-5 ">
          <div className="w-1/4  flex flex-col justify-center text-center rounded-md  shadow-md border bg-white">
            <div className="flex flex-col items-center gap-3 border-b border-slate-200 p-4 ">
              <IoLocationOutline className="text-5xl text-[#2C742F]" />
              <p className="text-sm">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 border-b border-slate-200 p-4">
              <IoMailOutline className="text-5xl text-[#2C742F]" />
              <p>Proxy@gmail.com Help.proxy@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-1    p-4">
              <PiPhoneCall className="text-5xl text-[#2C742F]" />
              <p>(219) 555-0114</p> <p> (164) 333-0487</p>
            </div>
          </div>
          <div className=" w-3/4 shadow-lg border rounded-lg bg-white">
            <div className=" m-8 ">
              <h3 className="text-xl font-semibold py-1">Just Say Hello !</h3>
              <p className="text-xs pb-6 text-[#808080]">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
              <div>
                <div className="flex flex-col gap-6">
                  <form
                    className="flex flex-col gap-4 "
                    onSubmit={handleSubmit}
                  >
                    <div className="flex  ">
                      <label htmlFor="name"></label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        name="name"
                        placeholder="Name"
                        className="w-2/4 mr-2 border  rounded-md p-2 focus:border-green-500 focus:outline-none  shadow-sm"
                        onChange={handleChange}
                      />

                      <label htmlFor="email"></label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        name="email"
                        className="w-2/4 border rounded-md p-2 focus:border-green-500 focus:outline-none shadow-sm"
                        placeholder="xyz@email.com"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="title"></label>
                      <input
                        type="text"
                        value={formData.title}
                        id="title"
                        name="title"
                        className="w-full border rounded-md p-2  focus:border-green-500 focus:outline-none shadow-sm"
                        placeholder="Say Hello!"
                        onChange={handleChange}
                      />

                      <label htmlFor="subject"></label>
                      <input
                        type="text"
                        value={formData.subject}
                        id="subject"
                        name="subject"
                        placeholder="Subjects"
                        className="w-full  border rounded-md p-2 h-20 focus:border-green-500 focus:outline-none shadow-sm"
                        onChange={handleChange}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Send Messege"
                      className="bg-[#00B207] p-2 rounded-3xl text-white w-1/4 hover:bg-green-600  cursor-pointer"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
