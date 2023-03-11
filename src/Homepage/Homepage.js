import Main from "./Main/Main";
import Sidebar from "./sidebar/Sidebar";

const Homepage = () => {
  return (
    <div className="row">
      <Sidebar />

      <div className="col-lg-11">
        <Main />
      </div>
    </div>
  );
};

export default Homepage;
