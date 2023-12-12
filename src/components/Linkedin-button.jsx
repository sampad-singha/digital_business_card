import linkedin from "../assets/linkedin.png";
const LinkedinButton = () => {
    return (
        <div className={"btn-linkedin"}>
            <a href="http://linkedin.com"><img src={linkedin} alt="LinkedIn logo"/> LinkedIn</a>
        </div>
    );
};

export default LinkedinButton;