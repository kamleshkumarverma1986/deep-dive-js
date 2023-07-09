"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CourseForm from "@components/CourseForm";
import LexicalTextEditor from "@components/LexicalTextEditor/LexicalTextEditor";
import ClientAuthHOC from "@utils/ClientAuthHOC";

const CreateCourse = ({ session }) => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [course, setCourse] = useState({
    courseName: "",
    courseDescription: "",
    coursePromoContent: "",
    price: 0,
    discountInPercentage: 0,
    metaData: {
      title: "",
      description: "",
      keywords: "",
    },
  });

  const createCourse = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/course", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          ...course,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onHtmlChangeHandler = (htmlContent) => {
    console.log("htmlContent ", htmlContent);
  };

  return (
    <>
      <CourseForm
        type="Create"
        course={course}
        setCourse={setCourse}
        isSubmitting={isSubmitting}
        handleSubmit={createCourse}
      />

      <LexicalTextEditor
        initialHtml="<p>kaise ho</p>"
        onHtmlChange={onHtmlChangeHandler}
      />
    </>
  );
};

export default ClientAuthHOC(CreateCourse);
