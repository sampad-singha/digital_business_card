import tw from "../assets/Twitter Icon.png"
import fb from "../assets/Facebook Icon.png"
import ig from "../assets/Instagram Icon.png"
import gh from "../assets/GitHub Icon.png"


const Footer = () => {
    return (
        <div className={"footer--"}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={tw} alt="Twitter logo"/></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook logo"/></a>
            <a  href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={ig} alt="Instagram logo"/></a>
            <a href="https://github.com/sampad201199" target="_blank" rel="noopener noreferrer"><img src={gh} alt="Gitgub logo"/></a>
        </div>
    );
};

export default Footer;