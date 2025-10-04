import { IoEllipsisVertical, IoAddOutline } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoAddOutline></IoAddOutline>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
