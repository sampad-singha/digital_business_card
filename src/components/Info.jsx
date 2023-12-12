import person from "../assets/person.jpg"
import EmailButton from "./Email-button.jsx";
import LinkedinButton from "./Linkedin-button.jsx";
export default function Info(){
    return (
        <div className={"info--"}>
            <img src={person} alt="Person Image"/>
            <h1 className={"info--title"}>Sampad Singha</h1>
            <h4 className={"info--subtitle"}>Full-Stack Developer</h4>
            <p className={"info--web"}>sampad.github.io</p>
            <div className={"info--btn_container"}>
                <EmailButton />
                <LinkedinButton />
            </div>
        </div>
    )
}