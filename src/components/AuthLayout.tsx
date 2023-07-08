import Welcome from "./Welcome";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      {children}

      <Welcome className="hidden sm:flex" />
    </div>
  );
};

export default AuthLayout;
