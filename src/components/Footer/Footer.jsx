import Stack from "react-bootstrap/Stack";
import { customFooter, customDiv, flexChild,textBold,lowerChildStyle  } from ".";
function Footer() {
  return (
    <Stack direction="vertical" style={customFooter}>
      <Stack direction="horizontal">
        <div className="p-2" style={flexChild}>
          <div style={textBold}>Profile</div>
          <div style={lowerChildStyle}>
            <div>Leetcode</div>
            <div>Codechef</div>
            <div>Codeforces</div>
            <div>atcoder</div>
          </div>
        </div>
        <div className="p-2" style={flexChild}>
          <div style={textBold}>Contact Us</div>
          <div style={lowerChildStyle}>
            <div><a href="#">Linkedin</a></div>
            <div><a href="#">Instagram</a></div>
            <div><a href="#">Github</a></div>
            <div><a href="#">Portfolio</a></div>
          </div>
        </div>
        <div className="p-2" style={flexChild}>
          <div style={textBold}>Project</div>
          <div style={lowerChildStyle}>
            <div>Apna News</div>
            <div>To-Do App</div>
            <div>Weather App</div>
            <div>Chip</div>
          </div>
        </div>
      </Stack>
      <div style={customDiv}>
        &copy; 2024 Apna News. Built By Kaushal Kumar Yadav.
      </div>
    </Stack>
  );
}

export default Footer;
