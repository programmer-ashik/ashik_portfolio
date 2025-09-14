"use client";
import { ErrorMessage, Field, Form, Formik } from "formik"; // Import Formik components
import { useState } from "react"; // Keep useState if you have other states, but not for form data
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import * as Yup from "yup"; // Import Yup for validation

const MyForm = () => {
  // Renamed from 'Form' to avoid conflict if you name the component 'Form'
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage button disabled state

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Your Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Your Email is required"),
    subject: Yup.string(), // Subject is optional as per your original code (no 'required')
    message: Yup.string().required("Your Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    // Formik passes 'values' and helper functions
    setIsSubmitting(true);
    // console.log("Submitted:", values); // 'values' now contains your form data

    // Simulate an API call or email sending
    try {
      const response = await fetch(
        "https://ashik.innovexasolution.com/api/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      const result = await response.json();
      console.log(result.message);
      toast.success("Message sent successfully!");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      resetForm();
    } catch (error) {
      toast.error(error.message || "Something went wrong!"); // Example error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema} // Add validation schema
      onSubmit={handleSubmit}
    >
      {(
        { errors, touched } // Destructure errors and touched for validation feedback
      ) => (
        <Form className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {/* Name Field */}
          <div className="mb-4">
            <Field
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.phone && touched.phone
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-300 text-sm mt-1"
            />
          </div>

          {/* Phone Field */}
          <div>
            <Field
              type="text" // Changed to text to handle phone formats better, validation handles numbers
              name="phone"
              placeholder="Phone Number"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.phone && touched.phone
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email Field */}
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Your Email"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Subject Field */}
          <div>
            <Field
              type="text"
              name="subject"
              placeholder="Subject"
              className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.subject && touched.subject
                  ? "border-red-500"
                  : "border-gray-300" // Apply error style if needed
              }`}
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message Field */}
          <div className="col-span-2">
            <Field
              as="textarea" // Use 'as="textarea"' for multiline inputs
              name="message"
              placeholder="Your Message"
              rows="8"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                errors.message && touched.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting} // Disable button while submitting
            className="group col-span-2 md:col-span-1 relative border-2 border-[#fb1359] bg-[#fb1359] text-white font-semibold py-4 px-6 rounded-full cursor-pointer flex items-center justify-center overflow-hidden"
          >
            <FaArrowRight className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
            <span className="relative z-10 mx-2 scale-95 group-hover:translate-x-4 transition-all duration-500">
              {isSubmitting ? "Sending..." : "Appointment Now"}
            </span>
            <FaArrowRight className="transition-all duration-300 group-hover:opacity-0" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
