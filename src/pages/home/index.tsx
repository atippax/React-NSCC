import Home from "./components/test";
import useMultiply from "./components/test/adaptors/useMultiply";
import useAddTen from "./components/test/adaptors/useAddTen";
import useIncrementCount from "./components/test/hooks/useIncrementCount";
import useBaseAdaptor from "./components/test/adaptors/useBaseAdaptor";
import useSameState from "./components/test/adaptors/useSameState";
import useSameSomeState from "./components/test/adaptors/useSameSomeState";

function Index() {
  const defaultData = useBaseAdaptor();
  const addTen = useAddTen();
  const multiply = useMultiply();
  const sameState = useSameState(defaultData);
  const sameSomeState = useSameSomeState(defaultData);

  useIncrementCount({
    setCount: multiply.setters.setCount,
  });
  return (
    <>
      <div>
        same state but custom adaptor
        <div style={{ display: "flex", gap: "12px" }}>
          <div>
            with sameState hook
            <br />
            {sameState.states.count}
            <Home adaptor={sameState}></Home>
          </div>
          <div>
            with defaultData hook
            <br />
            {defaultData.states.count}
            <Home adaptor={defaultData}></Home>
          </div>
          <div>
            with sameSomeState hook
            <br />
            {sameSomeState.states.count}
            <Home adaptor={sameSomeState}></Home>
          </div>
        </div>
      </div>
<br/><br/><br/>
      <div>
        saparate state
        <div style={{ display: "flex", gap: "12px" }}>
          <div>
            with addTen hook
            <br />
            {addTen.states.count}
            <Home adaptor={addTen}></Home>
          </div>
          <div>
            with mltiply hook
            <br />
            {multiply.states.count}
            <Home adaptor={multiply}></Home>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
