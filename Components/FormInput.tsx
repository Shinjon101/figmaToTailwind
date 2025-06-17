interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const FormInput = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: FormInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="self-start text-base font-bold tracking-normal leading-7">
        {label}
      </label>
      <div className="mt-2 bg-white rounded-lg">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full px-5 py-3 rounded-lg border border-gray-200 border-solid bg-blend-normal max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default FormInput;
