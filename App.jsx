/*function App() {
  const studentName = "Rahul Sharma";
  const courseName = "OOPS with C++";
  const attendance = 82;

  return (
    <div>
      <h1>Student Details</h1>

      <p>Name: {studentName}</p>
      <p>Course: {courseName}</p>
      <p>Attendance: {attendance}%</p>
    </div>
  );
}

export default App;*/

/*function Header() {
  return <h1>Student Management System</h1>;
}

function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name:Nitin Kumar</p>
      <p>Course: B.Tech CSE</p>
      <p>Roll No:129</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Student />
    </div>
  );
}

export default App;*/

function Header() {
  return <h1>Student Management System</h1>;
}

function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Roll No: {props.rollNo}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />

      <Student
        name="Nitin Kumar"
        course="B.Tech CSE-AIML"
        rollNo={129}
      />

      <Student
        name="Nikit"
        course="B.Tech AIML"
        rollNo={125}
      />
    </div>
  );
}

export default App;
