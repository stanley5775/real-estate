import React, { useRef, useState } from "react";
import Emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setButtonText("Sending....");

    Emailjs.sendForm(
      "service_wde1qji",
      "template_glahmna",
      form.current,
      "JaJqm4Wkcn7m114HO"
    ).then(
      () => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setButtonText("Send Message");
        setSending(false);
      },
      (error) => {
        toast.error("Failed to send message, try again later.");
        console.error(error.text);
        setButtonText("Send Message");
        setSending(false);
      }
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready To Make a Move? let's Build Your Future Together
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={sending}
          className="bg-blue-600 text-white py-2 px-12 md-10 rounded"
        >
          {buttonText}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
