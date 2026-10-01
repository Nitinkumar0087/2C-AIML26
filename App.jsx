//Example:-1

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

//Example:-2

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

//Example:-3

/*function Header() {
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

export default App;*/

//Example:-4

/*function App() {
  function showMessage() {
    alert("Welcome to React Event Handling");
  }
  function AlsoShowMessage() {
    alert("This My First React Program");
  }

  return (
    <div>
      <h1>React Event Example</h1>

      <button onClick={showMessage}>
        Click Me
      </button>
      <br />
      <button onClick={AlsoShowMessage}>Click Me</button>
    </div>
  );
}

export default App;*/

//Example:-5

/*import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>React Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}

export default App;*/

//Example:-6

/*import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1>React Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase
      </button>
      <br />

      <button onClick={decreaseCount}>
        Decrease
      </button>
      <br />

      <button onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default App;*/

//Example:-8
//Creating button

/*import {useState} from 'react';

function App(){
  const [count,setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }

  return (
    <div>
    <h1>React Counter</h1>
    <h2>{count}</h2>

    <button onClick={increaseCount}> Click Me To Increase Count</button> <br />

    <button onClick={decreaseCount}>Click Me To Decrease Count</button> <br />

    <button onClick={reset}>Click Me To Reset Count</button>
    </div>
  );
}
export default App;*/

//Example:-9
//Taking name input and using event to change name

import {useState} from 'react';

function App(){
  const [name,setName] = useState('');

  function nameChange(event){
    setName(event.target.value);
  }

  return(
    <div>
      <h2>Student Name</h2>
      <input type="text" value={name} onChange={nameChange} placeholder='Enter Name'></input>
      <h3>Student Name is {name}</h3>
    </div>
  );
} 
export default App;



