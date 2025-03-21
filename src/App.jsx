import { Route, Routes } from "react-router-dom";
import { Header, Home, PostModal } from "./components";
import { useSelector } from "react-redux";
function App() {
  const { isModal } = useSelector((state) => state.post);

  return (
    <div className="container w-full mx-auto">
      {isModal != false && <PostModal />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
