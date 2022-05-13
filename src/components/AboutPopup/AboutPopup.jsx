import ReactDom from "react-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { togglePopupShow } from "../../redux/popup/popupSlice";

// Svgs
import { VscChromeClose } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

// Scss
import "./AboutPopup.scss";

const AboutPopup = ({ show, toggleShow }) => {
	const dispatch = useDispatch();
	const popup = useSelector((state) => state.popup);
	const handleToggleShowPopup = () => {
		dispatch(togglePopupShow());
	};

	if (!popup) return null;

	return ReactDom.createPortal(
		<>
			<div className="aboutPopup__backdrop" onClick={() => handleToggleShowPopup()}></div>
			<div className="aboutPopup__container">
				<div className="aboutPopup__closeButton" onClick={() => handleToggleShowPopup()}>
					<VscChromeClose />
				</div>

				<div className="aboutPopup__header">
					<span style={{ marginBottom: "5px" }}>
						&lt;<b>Covid19 Statistics</b>/&gt;
					</span>
					<span style={{ fontSize: "14px" }}>by Reza Mehdipour</span>
				</div>

				<div className="aboutPopup__socials flex-center">
					<a href="https://github.com/rezamehdipour" target="_blank" rel="noreferrer" className="github">
						<SiGithub />
					</a>
					<a href="https://www.linkedin.com/in/rezamehdipour/" target="_blank" rel="noreferrer" className="linkedin">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</>,
		document.getElementById("aboutPopup")
	);
};

export default AboutPopup;
