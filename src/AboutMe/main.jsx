import Theme from '../features/theme/main';
import StyledContainer,
{
    StyledImg, StyledDiv, StyledTitle, StyledName,
    StyledDescription, StyledButton,
    StyledContent, StyledTick, StyledImgContainer
} from './styled';
import tick from '../images/tick.svg';
import me from '../images/me.jpg'

const AboutMe = () => {

    return (
        <StyledContainer>
            <StyledImgContainer>
                <StyledImg src={me} alt="Image" />
            </StyledImgContainer>
            <StyledDiv>
                <StyledTitle >
                    This is
                </StyledTitle>
                <StyledName>
                    My Full name
                </StyledName>
                <StyledDescription>
                    I spend every free time to improve my React skills. If You are interested work with me just let me know.
                </StyledDescription>
                <StyledButton>
                    <StyledTick src={tick} alt="tick" />
                    <StyledContent>
                        Hire Me
                    </StyledContent>
                </StyledButton>
            </StyledDiv>
            <Theme />
        </StyledContainer>
    )
}

export default AboutMe;