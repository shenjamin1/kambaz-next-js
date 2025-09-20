export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3>Assignment Name</h3>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={6} cols={60}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option>Online</option>
              </select>
              <br />
              <br />
              Online Entry Options
              <div>
                <label>
                  <input id="wd-text-entry" type="checkbox" /> Text Entry
                </label>
                <br />
                <label>
                  <input id="wd-website-url" type="checkbox" /> Website URL
                </label>
                <br />
                <label>
                  <input id="wd-media-recordings" type="checkbox" /> Media
                  Recordings
                </label>
                <br />
                <label>
                  <input id="wd-student-annotation" type="checkbox" /> Student
                  Annotation
                </label>
                <br />
                <label>
                  <input id="wd-file-upload" type="checkbox" /> File Uploads
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign Assignment to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />{" "}
              <label htmlFor="wd-available-until">Until</label>{" "}
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button>Cancel</button> <button>Save</button>
    </div>
  );
}
