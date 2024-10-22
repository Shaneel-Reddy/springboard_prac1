import React from "react";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Infosys Springboard</h1>
      <p>This is the home page, your gateway to learning and growth.</p>

      <section className="introduction">
        <h2>About Infosys Springboard</h2>
        <p>
          Infosys Springboard is a comprehensive learning platform designed to
          empower individuals and organizations to develop skills for the
          future. Our platform offers a range of courses, resources, and tools
          that help learners at all stages of their career journeys.
        </p>
      </section>

      <section className="features">
        <h2>Features of Infosys Springboard</h2>
        <ul>
          <li>
            <strong>Diverse Learning Paths:</strong> Choose from a variety of
            courses across different domains, including technology, business,
            and personal development.
          </li>
          <li>
            <strong>Interactive Learning:</strong> Engage with interactive
            content, quizzes, and hands-on projects to reinforce your learning
            experience.
          </li>
          <li>
            <strong>Expert Guidance:</strong> Benefit from insights and
            mentorship from industry professionals and educators.
          </li>
          <li>
            <strong>Community Support:</strong> Connect with fellow learners,
            share experiences, and participate in discussions to enhance your
            learning journey.
          </li>
        </ul>
      </section>
    </div>
  );
}
