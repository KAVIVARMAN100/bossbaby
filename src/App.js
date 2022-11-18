import logo from './logo.svg';
import './App.css';

function App() {
  // const names=["jordan","peterrson","greene"]
  return(
<div className="App">

 <User name="VIRAT"
 pic="https://www.finetoshine.com/wp-content/uploads/2020/09/Virat-Kohli-Fan-Clubs-Instagram-profile-post-Finally-we-have.jpg" />
 
 <User name="KAVI" 
 pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZIwwRSVpr5BKTWpKtYdgPYLouV_NA0yEGg&usqp=CAU"/>

<User name="VARMAN"
 pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-q6roa6kKFd394fwtl8uljGLI3HZyEOc1Q&usqp=CAU" 
 /> 
 
 
{/* <Welcome name="kavi" />
<Welcome name="Varman" />
<Welcome name="barathan" />  */}

{/* {names.map(nm =><Welcome name={nm} />)} */}


</div>
  );
  
}

function User({pic,name}){
  // const {pic,name}=props
 
  return (
 
    <section>
      <img className='profilepic' src={pic} />
      <h1 className='usergreet'>
        HELLO,<span className='username'>{name}</span> </h1>
      <p>some magic to happen!</p>
    </section>
  );
}

export default App;
