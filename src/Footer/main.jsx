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
                I spend every free time to improve my programming skills.
                If You are interested work with me just let me know.
            </StyledDescription>
            <StyledIcon href={`${git}`} target="_blank" rel="noreferrer">
                {GitHubIcon}
            </StyledIcon>
        </StyledFooter>
    )
}
export default Footer;