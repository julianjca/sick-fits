import { Header, Meta } from "@components";

export const Page = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      {children}
    </div>
  );
};
