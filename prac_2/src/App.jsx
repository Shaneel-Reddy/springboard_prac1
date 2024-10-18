import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <Body />
      </div>
      <div className="div3">
        <Footer />
      </div>
    </>
  );
}

export default App;
