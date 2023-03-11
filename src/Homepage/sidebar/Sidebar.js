import logo from "../../img/logo.png";
import adduser from "../../img/adduser.svg";
import user from "../../img/user.svg";
import folder from "../../img/folder.svg";
import download from "../../img/download.svg";
import file from "../../img/file.svg";
import setting from "../../img/setting.svg";
import next from "../../img/next.svg";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="nav col-lg-1 p-0">
      <a href="/" className="logo_n">
        <img src={logo} alt="logo" className="logo_img" />
      </a>
      <a href="/" className="adduser">
        <img src={adduser} alt="adduser" className="adduser_img" />
        <div className="nav_text">New</div>
      </a>
      <a href="/" className="adduser">
        <img src={user} alt="user" className="patent_img" />
        <div className="nav_text">Patent</div>
      </a>
      <a href="/" className="adduser">
        <img src={folder} alt="folder" className="folder_img" />
        <div className="nav_text">Folder</div>
      </a>
      <a href="/" className="adduser">
        <img src={download} alt="download" className="download_img" />
        <div className="nav_text">Upload</div>
      </a>
      <a href="/" className="adduser">
        <img src={file} alt="file" className="file_img" />
        <div className="nav_text">Report</div>
      </a>
      <a href="/" className="adduser">
        <img src={setting} alt="setting" className="setting_img" />
        <div className="nav_text">Setting</div>
      </a>
      <a href="/" className="adduser">
        <img src={next} alt="next" className="next_img" />
        <div className="nav_text">Logout</div>
      </a>
    </div>
  );
};
export default Sidebar;
