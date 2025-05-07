import CustomIcon from "../../assets/icon/CustomIcon";
import Container from "../../component/Common/Container";
import SectionTitle from "../../component/Common/SectionTitle";
import Button from "../../component/Common/Button";
import TopBg from "../../component/Common/TopBg";
import { useFormik } from "formik";
import { contactUsSchema } from "../../schemas/forms";

// Initial values for the form fields
const initialValues = {
  fullName: "",
  emailAddress: "",
  subject: "",
  message: "",
};

// Function to handle form submission
const onSubmit = (values) => {
  console.log("Form submitted", values);
};

function ContactForm() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactUsSchema,
    onSubmit: onSubmit,
  });
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
        <div>
          <label htmlFor="fullName" className="text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.fullName && touched.fullName ? "border-red-500" : "border-[#A6A6A6]"
            } w-full px-3 sm:px-4 h-10 sm:h-11 lg:h-12 rounded-xl sm:rounded-2xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base`}
          />

          {/* Error message */}
          {errors.fullName && touched.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email-address" className="text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={values.emailAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.emailAddress && touched.emailAddress ? "border-red-500" : "border-[#A6A6A6]"
            } w-full px-3 sm:px-4 h-10 sm:h-11 lg:h-12 rounded-xl sm:rounded-2xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base`}
          />

          {/* Error message */}
          {errors.emailAddress && touched.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.subject && touched.subject ? "border-red-500" : "border-[#A6A6A6]"
            } w-full px-3 sm:px-4 h-10 sm:h-11 lg:h-12 rounded-xl sm:rounded-2xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base`}
          />

          {/* Error message */}
          {errors.subject && touched.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>
        <div>
          <label htmlFor="what-can-we-help-you-with" className="text-sm sm:text-base font-light leading-5 sm:leading-6 text-[#A6A6A6]">
            What can we help you with?
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something here..."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.message && touched.message ? "border-red-500" : "border-[#A6A6A6]"
            } w-full p-3 sm:p-4 h-[120px] sm:h-[160px] lg:h-[200px] rounded-lg sm:rounded-xl mt-1 sm:mt-2 border border-[#A6A6A6] opacity-[0.6] focus:outline-none text-sm sm:text-base`}
          />

          {/* Error message */}
          {errors.message && touched.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="btn-primary-green-full">
          Send Message
        </button>
      </form>
    </>
  );
}

export default ContactForm;
