export default function Modules() {
  return (
    <div>
      <button type="button" id="module-button">
        Collapse All
      </button>{" "}
      <button type="button" id="module-button">
        View Progress
      </button>{" "}
      <select id="module-select">
        <option value="Publish All">Publish All</option>
      </select>{" "}
      <button type="button" id="module-button">
        + Module
      </button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the Course</li>
                <li className="wd-content-item">
                  Learn What is Web Development?
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
  );
}
