import { useState } from "react";
import toast from "react-hot-toast";
import FormInput from "./FormInput";
import Checkbox from "./CheckBox";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  //  Form validation check

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid =
    formData.email.trim() !== "" &&
    formData.password.length > 5 &&
    isValidEmail(formData.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Success
    toast.success("Logged in created successfully!");

    setFormData({
      email: "",
      password: "",
    });
    setRememberMe(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-4 py-5 mt-10 max-w-full text-sm tracking-normal leading-6
       bg-white rounded-xl border border-gray-200 shadow-xl w-[350px] max-md:px-4 max-md:mt-8"
    >
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

      <Checkbox
        checked={rememberMe}
        onChange={setRememberMe}
        label="Remember me"
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
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
