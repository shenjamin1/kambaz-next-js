import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              alt="reactjs"
              width={200}
              height={150}
            />
            <div>
              <h5>CS4550 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack Software Developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2000" className="wd-dashboard-course-link">
            <Image
              src="/images/python.png"
              alt="python"
              width={200}
              height={150}
            />
            <div>
              <h5>CS2000 Data Science</h5>
              <p className="wd-dashboard-course-title">Data Science & AI</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1111" className="wd-dashboard-course-link">
            <Image
              src="/images/calculus.png"
              alt="calc1"
              width={200}
              height={150}
            />
            <div>
              <h5>CS1111 Calculus 1</h5>
              <p className="wd-dashboard-course-title">Mathematics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1112" className="wd-dashboard-course-link">
            <Image
              src="/images/calculus.png"
              alt="calc2"
              width={200}
              height={150}
            />
            <div>
              <h5>CS1112 Calculus 2</h5>
              <p className="wd-dashboard-course-title">Mathematics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1113" className="wd-dashboard-course-link">
            <Image
              src="/images/calculus.png"
              alt="calc3"
              width={200}
              height={150}
            />
            <div>
              <h5>CS1113 Calculus 3</h5>
              <p className="wd-dashboard-course-title">Mathematics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1101" className="wd-dashboard-course-link">
            <Image
              src="/images/english101.png"
              alt="english101"
              width={200}
              height={150}
            />
            <div>
              <h5>ENGW1101 English 101</h5>
              <p className="wd-dashboard-course-title">Language Arts</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5000" className="wd-dashboard-course-link">
            <Image
              src="/images/game-development.png"
              alt="game-dev"
              width={200}
              height={150}
            />
            <div>
              <h5>CS5000 Game Development</h5>
              <p className="wd-dashboard-course-title">
                Game Design & Programming
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
