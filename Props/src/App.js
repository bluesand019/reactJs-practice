import './App.css';
import Biodata from './BioData';

const biodata = [
  {
    name: "Kowsor Dip",
    email: "mddip2000@gmail.com",
    phone: "123458696",
    github: "github.com/kowsor",
    skills: ["HTML", "CSS", "JS"],
    interests: ["Games", "Books", "Travelling"]
  },
  {
    name: "Asif Rafi",
    email: "asifrafi123@gmail.com",
    phone: "12647213",
    github: "github.com/asifrafi",
    skills: ["HTML", "CSS", "JS", "Typescript", "React"],
    interests: ["Games", "Books"]
  }
]

function App() {
  return (
    <>
    {biodata.map(element => (
      <>
    <Biodata
      name = {element.name}
      email = {element.email}
      phone = {element.phone}
      github = {element.github}
      skills = {element.skills}
      interests = {element.interests}
      />
      <hr />
      </>
    ))}
    </>
  );
}

export default App;
