import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="parent">
        <Header />
        <div className="main">
          <Body />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
