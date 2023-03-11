import profile from "./profile.png";

import "./section1.css";

const Section1 = () => {
  return (
    <div className="user_profile">
      <img src={profile} alt="profile" className="profile" />
      <div className="name">Diane Cooper</div>
      <div className="email">diane.cooper@example.com</div>

      <div className="number">
        <div className="manage1">
          <div className="number1"> 15 </div>
          <span>Past</span>
        </div>

        <div className="rborder"></div>

        <div className="manage1">
          <div className="number1">02 </div>

          <span>Upcoming</span>
        </div>
      </div>
      <div className="btn1">
        <div className="btn2">Send Message</div>
      </div>

      <div className="file_doc">Files / Documents</div>
      <div className="result ">
        <div className="num_2">
          1<span className="result2">Chcek up Result.pdf</span>
        </div>
      </div>
      <div className="result ">
        <div className="num_2">
          2<span className="result2">Chcek up Result.pdf</span>
        </div>
      </div>
      <div className="result ">
        <div className="num_2">
          3<span className="result2">Medical Prescription.pdf</span>
        </div>
      </div>
      <div className="result ">
        <div className="num_2">
          4<span className="result2">Dental X-ray Result.pdf</span>
        </div>
      </div>
    </div>
  );
};
export default Section1;
