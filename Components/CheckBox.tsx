import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const CheckBox = ({ checked, onChange, label }: CheckboxProps) => {
  return (
    <div className="flex gap-3.5 self-start mt-6">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`flex flex-row justify-center items-center shrink-0 my-auto rounded h-[19px] w-[37px]  transition-colors duration-200`}
        aria-checked={checked}
        role="checkbox"
      >
        {checked ? (
          <FaCheckSquare className="text-indigo-600 w-20 h-7" />
        ) : (
          <FaRegSquare className="text-gray-600 w-20 h-7" />
        )}
        <span className="sr-only">Toggle agreement to terms</span>
      </button>
      <span className="basis-auto text-base font-bold tracking-normal leading-7">
        {label}
      </span>
    </div>
  );
};

export default CheckBox;
