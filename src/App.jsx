import "./App.css";
import Footer from "./Footer/Footer";
import Banner from "./Header/Banner/Banner";
import Navbar from "./Header/Navbar/Navbar";
import TaskBoard from "./Task/TaskBoard";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Banner />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
