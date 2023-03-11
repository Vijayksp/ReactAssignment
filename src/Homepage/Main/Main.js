import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

const Main = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Section1 />
      </div>

      <div className="col-lg-8">
        <Section2 />
      </div>
    </div>
  );
};
export default Main;
