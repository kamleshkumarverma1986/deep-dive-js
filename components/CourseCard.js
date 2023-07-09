import Link from "next/link";

const CourseCard = ({ courseName, courseDescription, coursePromoContent }) => {
  return (
    <div className="course_card">
      <div className="flex justify-between items-start gap-5">
        <Link
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          href={`/course/${courseName}`}
        >
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {courseName}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {courseDescription}
            </p>
          </div>
        </Link>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {coursePromoContent}
      </p>
    </div>
  );
};

export default CourseCard;
