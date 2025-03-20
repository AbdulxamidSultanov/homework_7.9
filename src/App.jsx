import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setError, setLoader } from "./lib/slices/productsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      dispatch(setLoader(true));
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoader(false));
      }
    };
    getProducts()
  }, []);
  return <></>;
}

export default App;
