import { Button } from "react-bootstrap";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="mb-3 clearfix">
      <div
        className="float-start d-flex align-items-center border rounded px-3 text-muted bg-white"
        id="wd-assignments-search"
        style={{ height: "38px", width: "400px" }}
      >
        <FaMagnifyingGlass className="me-2" />
        <span>Search...</span>
      </div>

      <div className="float-end">
        <Button
          variant="secondary"
          size="lg"
          className="me-2"
          id="wd-add-group-btn"
        >
          <FaPlus
            className="me-2 position-relative"
            style={{ bottom: "1px" }}
          />
          Group
        </Button>

        <Button variant="danger" size="lg" id="wd-add-assignment-btn">
          <FaPlus
            className="me-2 position-relative"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Button>
      </div>
    </div>
  );
}
