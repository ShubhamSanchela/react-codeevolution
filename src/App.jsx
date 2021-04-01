import './App.css';
import PostList from './components/PostList';
// import Portal from './components/Portal';
// import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import Form from './components/Form';
// import NameList from './components/NameList';
// import Counter from './components/Counter';
// import UserGreeting from './components/UserGreeting';
// import Message from './components/Message';
// import Greet from "./components/Greet"

function App() {
  return (
    <div className="App">
      {/* <Greet name="Shubham"  surname="Sanchela">
        <p >This is my children Tag</p> 
      </Greet> 
      <Greet name="Hello"  surname="React" >
          <button>Action</button>
      </Greet>
      <Message />
      <Counter />
      <UserGreeting />
      <NameList />
      <Form />
      <ParentComp />
      <RefsDemo />
      <Portal /> */}
      <PostList />
    </div>
  );
}

export default App;
