import { ReactNode } from "react";
import AccountNavigation from "./navigation";
import { FaUserCircle } from "react-icons/fa";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account">
      <h2 className="text-danger">
        <FaUserCircle className="me-3 fs-4 mb-1" />
        Account
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
