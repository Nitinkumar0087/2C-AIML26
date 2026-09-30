function Header() {
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

export default App;
