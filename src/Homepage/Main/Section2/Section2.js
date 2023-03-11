import "./Section2.css";
import note2 from "./note2.svg";
const Section2 = () => {
  return (
    <>
      <div className="information">
        <div className="box">
          <div className="info1">
            <div className="data1">Gender</div>
            <div className="data2">Female</div>
            <div className="border1"></div>
          </div>
          <div className="info1">
            <div className="data1">Birthday</div>
            <div className="data2">Feb 24th, 1997</div>
            <div className="border1"></div>
          </div>
          <div className="info1">
            <div className="data1">Phone Number</div>
            <div className="data2">(239)555-0108</div>
            <div className="border1"></div>
          </div>
          <div className="info1">
            <div className="data1">Registered Date</div>
            <div className="data2">Feb 24th, 1997</div>
            <div className="border1"></div>
          </div>
        </div>
        <div className="box-2">
          <div className="info1">
            <div className="data1">Street Address</div>
            <div className="data2">JL. Diponegoro No. 21</div>
            <div className="border1"></div>
          </div>
          <div className="info1">
            <div className="data1">City</div>
            <div className="data2">Cilacap</div>
            <div className="border1"></div>
          </div>
          <div className="info1">
            <div className="data1">Zip Code</div>
            <div className="data2">655849</div>
            <div className="border1"></div>
          </div>
          <div className="info1">
            <div className="data1">Member Ststus</div>
            <div className="data2">Active Member</div>
            <div className="border1"></div>
          </div>
        </div>
      </div>

      <div className="appoint">
        <div className="appoint_1 active">
          <div className="active2">Upcoming Appointments</div>
        </div>
        <div className="appoint_1">Past Appointments</div>
        <div className="appoint_1">Medical Records</div>
      </div>

      <div className="treatment">
        <div className="root">
          <div className="canal">Root Canal Treatment</div>
          <div className="show">
            <div className="show_1">Show previous Treatment</div>
          </div>
        </div>

        <div className="date">
          <div className="cls1 same">
            <div className="ndate">26 Nov'19</div>
            <div className="time">09:00-10:00</div>
          </div>
          {/* <div className="dateborder same"></div> */}
          <div className="cls2 same">
            <div className="treat_info_1">Treatment</div>
            <div className="treat_info_2">Open Access</div>
          </div>
          {/* <div className="dateborder same"></div> */}
          <div className="cls3 same p_20">
            <div className="treat_info_1">Dentist</div>
            <div className="treat_info_3">Drg. Adam H.</div>
          </div>
          <div className="cls4 same p_20">
            <div className="treat_info_1">Nurse</div>
            <div className="treat_info_3">Jessicamila</div>
          </div>
          <div className="cls5 same p_20 note">
          <img src={note2} alt="/" /> <span>Note</span>
          </div>
        </div>

        <div className="date">
          <div className="cls1 same">
            <div className="ndate">12 Nov'19</div>
            <div className="time">09:00-10:00</div>
          </div>
          <div className="dateborder same"></div>
          <div className="cls2 same">
            <div className="treat_info_1">Treatment</div>
            <div className="treat_info_2">Root Canal</div>
          </div>
          <div className="dateborder same"></div>
          <div className="cls3 same">
            <div className="treat_info_1">Dentist</div>
            <div className="treat_info_2">Drg. Adam H.</div>
          </div>
          <div className="cls4 same">
            <div className="treat_info_1">Nurse</div>
            <div className="treat_info_2">Jessicamila</div>
          </div>
          <div className="cls5 same">
            <img src={note2} alt="/" /> <span>Note</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section2;
