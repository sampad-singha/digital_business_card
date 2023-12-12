import mail from "../assets/Mail.png"
const EmailButton = () => {
    return (
        <div className={"btn-email"}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sampadsingha8@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="mail logo"/> Email</a>
        </div>
    );
};

export default EmailButton;