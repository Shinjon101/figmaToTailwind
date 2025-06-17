import SignUpForm from "../Components/SignUpForm";
const SignUpPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-25 text-gray-900 bg-white ">
      <main className="flex flex-col items-center pt-20 pb-9 w-full font-bold tracking-normal bg-slate-50 max-md:pt-24 max-md:max-w-full">
        <header className="text-center">
          <h1 className="text-6xl tracking-tighter leading-none text-center max-md:text-4xl">
            Sign up
          </h1>
          <p className="mt-9 text-xl leading-loose text-center bg-blend-normal">
            To get started, you need to sign up here.
          </p>
        </header>

        <SignUpForm />

        <div className="mt-12 text-lg leading-7 text-center max-md:mt-10">
          <span style={{ color: "rgba(22,28,45,1)" }}>
            Already have an account?{" "}
          </span>
          <button
            className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
            onClick={() => {
              // Handle sign in navigation
              console.log("Navigate to sign in");
            }}
          >
            Sign in now
          </button>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
