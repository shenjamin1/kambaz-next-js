import {
  Form,
  Button,
  Container,
  Row,
  Col,
  FormLabel,
  FormControl,
  FormCheck,
  FormSelect,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container id="wd-assignments-editor" className="mt-4">
      <Form>
        <div className="mb-3">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl id="wd-name" type="text" defaultValue="A1" />
        </div>

        <div className="mb-3">
          <FormControl
            id="wd-description"
            as="textarea"
            rows={10}
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </div>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-points" className="mt-2">
              Points
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormControl id="wd-points" type="number" defaultValue={100} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-group" className="mt-2">
              Assignment Group
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-display-grade-as" className="mt-2">
              Display Grade as
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-display-grade-as" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter">Letter Grade</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel htmlFor="wd-submission-type" className="mt-2">
              Submission Type
            </FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <FormSelect
                id="wd-submission-type"
                defaultValue="Online"
                className="mb-3"
              >
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
                <option value="External Tool">External Tool</option>
              </FormSelect>

              <FormLabel className="fw-bold mb-2">
                Online Entry Options
              </FormLabel>

              <FormCheck
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                className="mb-2"
              />

              <FormCheck
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                defaultChecked
                className="mb-2"
              />

              <FormCheck
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                className="mb-2"
              />

              <FormCheck
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
                className="mb-2"
              />

              <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel className="mt-2">Assign</FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <FormLabel htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </FormLabel>
              <div className="border rounded p-2 mb-3 bg-white">
                <span className="badge bg-light text-dark border">
                  Everyone
                  <button
                    type="button"
                    className="btn-close btn-close-sm ms-2"
                    aria-label="Close"
                    style={{ fontSize: "0.7rem" }}
                  ></button>
                </span>
              </div>

              <div className="mb-3">
                <FormLabel htmlFor="wd-due-date" className="fw-bold">
                  Due
                </FormLabel>
                <FormControl
                  id="wd-due-date"
                  type="datetime-local"
                  defaultValue="2024-05-13T23:59"
                />
              </div>

              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel htmlFor="wd-available-from" className="fw-bold">
                      Available from
                    </FormLabel>
                    <FormControl
                      id="wd-available-from"
                      type="datetime-local"
                      defaultValue="2024-05-06T00:00"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel htmlFor="wd-available-until" className="fw-bold">
                      Until
                    </FormLabel>
                    <FormControl
                      id="wd-available-until"
                      type="datetime-local"
                      defaultValue="2024-05-20T23:59"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" size="lg">
            Cancel
          </Button>
          <Button variant="danger" size="lg">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}
