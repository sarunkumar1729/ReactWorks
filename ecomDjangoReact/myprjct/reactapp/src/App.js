import React, { useEffect, useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Access the studentData variable containing JSON data
    if (window.studentData) {
      setStudents(window.studentData);
    }
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name}
          </li>
        ))}``
      </ul>
    </div>
  );
}

export default StudentList;