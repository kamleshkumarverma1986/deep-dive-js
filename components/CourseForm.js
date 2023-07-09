import Link from "next/link";

const CourseForm = ({
  type,
  course,
  setCourse,
  isSubmitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h2 className="head_text text-left">
        <span className="blue_gradient">{type} Course</span>
      </h2>
      <p className="desc text-left max-w-md">
        {type} and share amazing courses with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Course Name{" "}
            <span className="font-normal">
              (JavaScript, ReactJS, Web Development, etc.)
            </span>
          </span>
          <input
            value={course.courseName}
            onChange={(e) =>
              setCourse({ ...course, courseName: e.target.value })
            }
            type="text"
            placeholder="Course Name"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Course Description
          </span>

          <textarea
            value={course.courseDescription}
            onChange={(e) =>
              setCourse({ ...course, courseDescription: e.target.value })
            }
            placeholder="Write your course description"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Course Promo Content
          </span>

          <textarea
            value={course.coursePromoContent}
            onChange={(e) =>
              setCourse({ ...course, coursePromoContent: e.target.value })
            }
            placeholder="Write your course promo content"
            required
            className="form_textarea "
            rows="2"
            cols="2"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Price
          </span>
          <input
            value={course.price}
            onChange={(e) => setCourse({ ...course, price: e.target.value })}
            type="text"
            placeholder="Course price"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Course discount in percentage
          </span>
          <input
            value={course.discountInPercentage}
            onChange={(e) =>
              setCourse({ ...course, discountInPercentage: e.target.value })
            }
            type="text"
            placeholder="Course discount in percentage"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Meta Data{" "}
            <span className="font-normal">( This will help with SEO) </span>
          </span>
          <div>
            <input
              value={course.metaData.title}
              onChange={(e) =>
                setCourse({
                  ...course,
                  metaData: {
                    ...course.metaData,
                    title: e.target.value,
                  },
                })
              }
              type="text"
              placeholder="Meta Title"
              required
              className="form_input"
            />
          </div>
          <div>
            <input
              value={course.metaData.description}
              onChange={(e) =>
                setCourse({
                  ...course,
                  metaData: {
                    ...course.metaData,
                    description: e.target.value,
                  },
                })
              }
              type="text"
              placeholder="Meta Description"
              required
              className="form_input"
            />
          </div>
          <div>
            <textarea
              value={course.metaData.keywords}
              onChange={(e) =>
                setCourse({
                  ...course,
                  metaData: {
                    ...course.metaData,
                    keywords: e.target.value,
                  },
                })
              }
              placeholder="Meta keywords"
              required
              className="form_textarea "
              rows="2"
              cols="2"
            />
          </div>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {isSubmitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CourseForm;
