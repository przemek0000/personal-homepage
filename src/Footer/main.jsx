import {
    StyledFooter, StyledTitle, StyledEmail,
    StyledDescription, StyledIcon
} from "./styled";

const Footer = ({ GitHubIcon, email }) => {
    return (
        <StyledFooter>
            <StyledTitle>
                Let's talk!
            </StyledTitle>
            <StyledEmail href={`mailto:${email}`}>
                {email}
            </StyledEmail>
            <StyledDescription>
                I'm always open to new projects whenever I have the time.
                If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
            </StyledDescription>
            <StyledIcon href="https://github.com/przemek0000">
                {GitHubIcon}
            </StyledIcon>
        </StyledFooter>
    )
}
export default Footer;