import { useState } from "react";
import toast from "react-hot-toast";
import FormInput from "./FormInput";
import Checkbox from "./CheckBox";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  //  Form validation check
  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password !== "" &&
    formData.confirmPassword !== "" &&
    agreedToTerms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Success
    toast.success("Account created successfully!");
    console.log("Form submitted:", { ...formData, agreedToTerms });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAgreedToTerms(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-4 py-5 mt-10 max-w-full text-sm tracking-normal leading-6
       bg-white rounded-xl border border-gray-200 shadow-xl w-[350x] max-md:px-4 max-md:mt-8"
    >
      <FormInput
        label="First Name"
        placeholder="e.g. John"
        value={formData.firstName}
        onChange={handleInputChange("firstName")}
      />

      <div className="mt-5">
        <FormInput
          label="Last Name"
          placeholder="e.g. Doe"
          value={formData.lastName}
          onChange={handleInputChange("lastName")}
        />
      </div>

      <div className="mt-5">
        <FormInput
          label="Email"
          placeholder="i.e. john@mail.com"
          type="email"
          value={formData.email}
          onChange={handleInputChange("email")}
        />
      </div>

      <div className="mt-5">
        <FormInput
          label="Password"
          placeholder="********"
          type="password"
          value={formData.password}
          onChange={handleInputChange("password")}
        />
      </div>

      <div className="mt-5">
        <FormInput
          label="Confirm Password"
          placeholder="********"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange("confirmPassword")}
        />
      </div>

      <Checkbox
        checked={agreedToTerms}
        onChange={setAgreedToTerms}
        label="I agree to the Terms & conditions"
      />

      <button
        type="submit"
        disabled={!isFormValid}
        className={`px-9 py-3.5 mt-7 text-lg font-bold tracking-tight leading-8 text-center text-white rounded-lg max-md:px-5 transition-colors duration-200 ${
          isFormValid
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Create an account
      </button>
    </form>
  );
};

export default SignUpForm;
