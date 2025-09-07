import { Formik, Field, ErrorMessage } from "formik";
import paymentImage from "../../assets/Checkout/payment.svg";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <Formik
      initialValues={{
        emailOrPhoneNumber: "",
        checkboxEmail: false,
        country: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        postalCode: "",
        city: "",
        checkboxSaveInfo: false,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.emailOrPhoneNumber) {
          errors.emailOrPhoneNumber = "Email or phone number is Required";
        }
        if (!values.country) {
          errors.country = "Country is Required";
        }
        if (!values.address) {
          errors.address = "Address is Required";
        }
        if (!values.apartment) {
          errors.apartment = "Apartment is Required";
        }
        if (!values.postalCode) {
          errors.postalCode = "Postal Code is Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let jsonForm = JSON.stringify(values, null, 2);
        setSubmitting(false);
        console.log(jsonForm);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
      }) => (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {/* contact */}
          <div className="flex items-center mt-7">
            <h1 className="font-bold text-2xl mr-auto">Contact</h1>
            <Link to={"/signin"} className="text-[#1773B0] underline">
              Log in
            </Link>
          </div>

          <input
            type="text"
            name="emailOrPhoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.emailOrPhoneNumber}
            className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
            placeholder="Email or mobile phone number"
          />
          <ErrorMessage
            name="emailOrPhoneNumber"
            component="p"
            className="text-red-700"
          />

          <div className="checkbox flex justify-start items-center">
            <input
              type="checkbox"
              name="checkboxEmail"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.checkboxEmail}
              className="form-checkbox h-4 w-4 text-[#1773B0] rounded-md transition duration-150 ease-in-out mx-3"
            />
            <label
              htmlFor="checkboxEmail"
              className="text-sm font-medium text-gray-700"
            >
              Email me with news and offers
            </label>
          </div>

          <h2 className="font-bold text-xl mt-7">Delivery</h2>

          <input
            type="text"
            name="country"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.country}
            className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
            placeholder="Country/Region"
          />
          <ErrorMessage name="country" component="p" className="text-red-700" />

          <div className="grid md:grid-cols-2 md:gap-6">
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
              placeholder="First name (optional)"
            />

            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
              placeholder="Last name"
            />
          </div>

          <input
            type="text"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
            placeholder="Address"
          />
          <ErrorMessage name="address" component="p" className="text-red-700" />

          <input
            type="text"
            name="apartment"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.apartment}
            className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
            placeholder="Apartment, suite, etc."
          />
          <ErrorMessage
            name="apartment"
            component="p"
            className="text-red-700"
          />

          <div className="grid md:grid-cols-2 md:gap-6">
            <input
              type="text"
              name="postalCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalCode}
              className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
              placeholder="Postal code"
            />

            <input
              type="text"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              className="h-12 px-3 w-full ring-1 ring-[#1773B0] rounded-md"
              placeholder="City (optional)"
            />
          </div>
            <ErrorMessage
              name="postalCode"
              component="p"
              className="text-red-700"
            />

          <div className="checkbox flex justify-start items-center">
            <input
              type="checkbox"
              name="checkboxSaveInfo"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.checkboxSaveInfo}
              className="h-4 w-4 text-[#1773B0] rounded-md transition duration-150 ease-in-out mx-3"
            />
            <label
              htmlFor="checkboxSaveInfo"
              className="text-sm font-medium text-gray-700"
            >
              Save this information for next time
            </label>
          </div>

          {/* shipping method */}
          <div className="my-7">
            <h2 className="font-bold text-xl mb-5">Shipping method</h2>
            <div className="flex justify-between items-center p-4 bg-[#F0F5FF] rounded-md">
              <p>Standard</p>
              <p className="uppercase font-bold">free</p>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="font-bold text-xl">Payment</h2>
            <p className="text-[#707070]">
              All transactions are secure and encrypted.
            </p>
            <img src={paymentImage} alt="payment" className="mx-auto" />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || !isValid || !dirty}
            className={`py-4 w-full rounded-md ${
              !isValid || !dirty
                ? "bg-[#F5F5F5] text-gray-500 cursor-not-allowed"
                : "bg-primary text-white"
            }`}
          >
            Pay now
          </button>
        </form>
      )}
    </Formik>
  );
}
