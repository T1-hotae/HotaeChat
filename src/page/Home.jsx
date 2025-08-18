import Title from "../component/Title";
import Header from "../component/Header";
import Footer from "../component/Foooter";

const Home = () => {
  return (
    <>
      <Header leftChild="menu" rightChild="login" />
      <Title />
      <Footer />
    </>
  );
};

export default Home;
