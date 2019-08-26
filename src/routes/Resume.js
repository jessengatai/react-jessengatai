import React from 'react';
import content from '../content/Resume.json'

export default class Resume extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap">

        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold mb-12 font-sans">Recent Courses</h2>

          <div className="mb-10">
            {content.courses.map( function(course) {
              return (
                <div className="mb-4">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-500">
                    <span className="badge mr-3">{course.year}</span>
                    {course.name}
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-12 font-sans">Experience</h2>
          {content.roles.map( function(role) {
            return (
              <div className="flex flex-col border-2 border-indigo-100 rounded bg-white p-8 mb-8">
                <p className="text-xs mb-3">{role.time}</p>
                <h3 class="text-lg font-sans font-bold mb-1">
                  {role.title}
                </h3>
                <a
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-indigo-500">
                  {role.company}
                </a>
                <p className="mt-8 text-sm">
                  {role.description}
                </p>
                <div className="flex flex-wrap mt-8">
                  {role.skills.map( function(skill) {
                    return (
                      <p className="badge mr-1">
                        {skill}
                      </p>
                    )}
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    )
  }
}
