import Link from "next/link";
import { FormControl, Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3">
      <h3 className="mb-3">Profile</h3>

      <FormControl
        defaultValue="alice"
        placeholder="Username"
        className="mb-2"
        id="wd-username"
      />

      <FormControl
        defaultValue="123"
        placeholder="Password"
        type="password"
        className="mb-2"
        id="wd-password"
      />

      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
        id="wd-firstname"
      />

      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
        id="wd-lastname"
      />

      <FormControl
        defaultValue="2000-01-01"
        type="date"
        className="mb-2"
        id="wd-dob"
      />

      <FormControl
        defaultValue="alice@wonderland"
        type="email"
        placeholder="Email"
        className="mb-2"
        id="wd-email"
      />

      <Form.Select
        defaultValue="FACULTY"
        id="wd-role"
        className="mb-3"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>

      <Link href="Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
