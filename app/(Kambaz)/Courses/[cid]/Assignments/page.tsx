import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";
import Link from "next/link";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
import AssignmentsControls from "./AssignmentsControls";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2 fs-5" />
            ASSIGNMENTS
            <span className="float-end">
              <span className="me-3 bg-light border px-3 py-1 rounded-pill text-muted">
                40% of Total
              </span>
              <AssignmentControlButtons />
            </span>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 border-start border-success border-5 border-top-0 border-bottom-0 border-end-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-5 text-success" />
                <div>
                  <Link
                    href="/Courses/1234/Assignments/123"
                    className="fw-bold text-decoration-none text-dark"
                  >
                    A1
                  </Link>
                  <div className="small">
                    <span className="text-danger">Multiple Modules</span>
                    <span className="text-muted"> | Not available until </span>
                    <span className="text-muted">May 6 at 12:00am</span>
                    <span className="text-muted"> | </span>
                  </div>
                  <div className="small text-muted">
                    <span className="fw-bold">Due</span> May 13 at 11:59pm | 100
                    pts
                  </div>
                </div>
                <div className="ms-auto">
                  <AssignmentItemControlButtons />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 border-start border-success border-5 border-top-0 border-bottom-0 border-end-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-5 text-success" />
                <div>
                  <Link
                    href="/Courses/1234/Assignments/234"
                    className="fw-bold text-decoration-none text-dark"
                  >
                    A2
                  </Link>
                  <div className="small">
                    <span className="text-danger">Multiple Modules</span>
                    <span className="text-muted"> | Not available until </span>
                    <span className="text-muted">May 13 at 12:00am</span>
                    <span className="text-muted"> | </span>
                  </div>
                  <div className="small text-muted">
                    <span className="fw-bold">Due</span> May 20 at 11:59pm | 100
                    pts
                  </div>
                </div>
                <div className="ms-auto">
                  <AssignmentItemControlButtons />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 border-start border-success border-5 border-top-0 border-bottom-0 border-end-0">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-5 text-success" />
                <div>
                  <Link
                    href="/Courses/1234/Assignments/345"
                    className="fw-bold text-decoration-none text-dark"
                  >
                    A3
                  </Link>
                  <div className="small">
                    <span className="text-danger">Multiple Modules</span>
                    <span className="text-muted"> | Not available until </span>
                    <span className="text-muted">May 20 at 12:00am</span>
                    <span className="text-muted"> | </span>
                  </div>
                  <div className="small text-muted">
                    <span className="fw-bold">Due</span> May 27 at 11:59pm | 100
                    pts
                  </div>
                </div>
                <div className="ms-auto">
                  <AssignmentItemControlButtons />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
