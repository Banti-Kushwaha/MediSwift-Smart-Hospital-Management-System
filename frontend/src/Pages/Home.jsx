import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to MediSwift - Smart Hospital Management System | Advanced & Trusted Healthcare Solutions"
        }
        imageUrl={"/hero.png"}
      />
      <Biography  />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;