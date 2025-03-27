const students = [
    { name: "Alice", grades: { math: 85, science: 90, history: 78 } },
    { name: "Bob", grades: { math: 75, science: 95, history: 82 } },
    { name: "Charlie", grades: { math: 92, science: 88, history: 85 } }
  ];
  
  // a. Function to get subject averages
  function getSubjectAverages(students) {
    const totalGrades = students.reduce((acc, student) => {
      for (const subject in student.grades) {
        if (!acc[subject]) acc[subject] = { total: 0, count: 0 };
        acc[subject].total += student.grades[subject];
        acc[subject].count += 1;
      }
      return acc;
    }, {});
  
    const averages = {};
    for (const subject in totalGrades) {
      averages[subject] = totalGrades[subject].total / totalGrades[subject].count;
    }
    return averages;
  }
  
  // b. Function to find the top student in a subject
  function findTopStudent(subject, students) {
    let topStudent = null;
    let highestGrade = -1;
  
    let subjectExists = students.some(student => subject in student.grades);
  
    if (!subjectExists) return "No data available";
  
    students.forEach(student => {
      if (student.grades[subject] > highestGrade) {
        highestGrade = student.grades[subject];
        topStudent = student.name;
      }
    });
  
    return topStudent;
  }
  
  // c. Function to add extra credit to students' grades (with max 100)
  function addExtraCredit(students, points) {
    students.forEach(student => {
      for (const subject in student.grades) {
        student.grades[subject] = Math.min(student.grades[subject] + points, 100);
      }
    });
  }
  
  // d. Modified findTopStudent function to handle invalid subject
  function findTopStudent(subject, students) {
    let topStudent = null;
    let highestGrade = -1;
  
    let subjectExists = students.some(student => subject in student.grades);
  
    if (!subjectExists) return "No data available";
  
    students.forEach(student => {
      if (student.grades[subject] > highestGrade) {
        highestGrade = student.grades[subject];
        topStudent = student.name;
      }
    });
  
    return topStudent;
  }
  
  // e. Example of how object destructuring can simplify working with this data structure
  students.forEach(student => {
    // Destructure grades from student
    const { math, science, history } = student.grades;
  
    console.log(`Student: ${student.name}`);
    console.log(`Math: ${math}, Science: ${science}, History: ${history}`);
  });
  
  // Example usage of the functions:
  
  // Get the subject averages
  console.log(getSubjectAverages(students));
  
  // Find the top student in math
  console.log(findTopStudent('math', students));
  
  // Add extra credit
  addExtraCredit(students, 5);
  
  // Check the updated student grades after adding extra credit
  console.log(students);
  