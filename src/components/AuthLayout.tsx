import Welcome from "./Welcome";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {children}

      <Welcome className="hidden md:flex" />
    </div>
  );
};

export default AuthLayout;
