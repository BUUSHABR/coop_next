import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface FormDetails {
  name: string;
  email: string;
  message: string;
}
const ContactUs: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values: FormDetails, { resetForm }) => {
      toast.success("Submitted successfully!");
      console.log(values, "contact details");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("sent email");
      } else {
        console.log("Error sending message. Try again.");
      }
      resetForm();
    },
  });

  return (
    <div
      className="bg-[#192440] flex flex-col items-center py-6 lg:py-12 px-4 md:px-8 lg:px-12 2xl:px-16 border-[0.5px] overflow-x-hidden border-t-[#FB883D]"
      id="contact"
    >
      <div className="bg-[#243359] rounded-[12px] lg:rounded-[28px] px-4 lg:px-12 py-4 lg:py-12 flex flex-col items-center w-[90%] lg:w-[80%]">
        <div
          className="text-[#FB883D] text-[20px] lg:text-[40px] leading-[24px] lg:leading-[40px] metrophobic-400"
          data-aos="zoom-in"
        >
          Contact Us
        </div>
        <div
          className="text-[#FFFFFF] text-sm lg:text-base text-center lg:text-start pt-2 work-sans-400"
          data-aos="zoom-in"
        >
          Get in touch with us today to discuss your project!
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <input
            data-aos="zoom-in"
            type="text"
            name="name"
            autoComplete="off"
            className="bg-[#192440] focus:outline-none rounded-[10px] lg:rounded-[14px] w-full mt-4 lg:mt-7 text-xs lg:text-base poppins-500 p-3 lg:p-5 text-[#FFFFFF]"
            placeholder="Enter Name*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-xs lg:text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}

          <input
            data-aos="zoom-in"
            type="text"
            name="email"
            className="bg-[#192440] focus:outline-none rounded-[10px] lg:rounded-[14px] w-full mt-3 lg:mt-6 text-xs lg:text-base poppins-500 p-3 lg:p-5 text-[#FFFFFF]"
            placeholder="Enter Email*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}

          <textarea
            data-aos="zoom-in"
            rows={5}
            name="message"
            className="bg-[#192440] focus:outline-none rounded-[10px] lg:rounded-[14px] w-full mt-3 lg:mt-6 text-xs lg:text-base poppins-500 p-3 lg:p-5 text-[#FFFFFF] resize-none"
            placeholder="Message*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className={`w-full mt-3 lg:mt-6 text-center poppins-500 text-[#FFFFFF] text-xs lg:text-base py-3 rounded-[10px] lg:rounded-[12px] transition-opacity cursor-pointer ${
              formik.isValid
                ? "bg-[#FB883D] opacity-100"
                : "bg-gray-500 opacity-50 cursor-not-allowed"
            }`}
          >
            SEND
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default ContactUs;
