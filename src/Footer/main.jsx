import {
    StyledFooter, StyledTitle, StyledEmail,
    StyledDescription, StyledIcon
} from "./styled";

const Footer = ({ GitHubIcon, email, git }) => {
    return (
        <StyledFooter>
            <StyledTitle>
                Let's talk!
            </StyledTitle>
            <div>
                <StyledEmail href={`mailto:${email}`}>
                    {email}
                </StyledEmail>
            </div>
            <StyledDescription>
                I'm always open to new projects whenever I have the time.
                If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
            </StyledDescription>
            <StyledIcon href={`${git}`} target="_blank" rel="noreferrer">
                {GitHubIcon}
            </StyledIcon>
        </StyledFooter>
    )
}
export default Footer;