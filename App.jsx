function App() {
  const studentName = "Nitin Kumar";
  const courseName = "Web Development";
  const rollNo = 129;

  return (
    <div>
      <h1>Student Details</h1>

      <p>Name: {studentName}</p>
      <p>Course: {courseName}</p>
      <p>Roll No: {rollNo}</p>
    </div>
  );
}

export default App;
