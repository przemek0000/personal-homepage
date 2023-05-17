import Theme from '../features/theme/main';
import StyledContainer,
{
    StyledImg, StyledDiv, StyledTitle, StyledName,
    StyledDescription, StyledButton,
    StyledContent, StyledTick, StyledImgContainer
} from './styled';
import tick from '../images/tick.svg';
import me from '../images/me.jpg'

const AboutMe = ({ email, theme, dispatch }) => {
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
                    Przemyslaw Gajczewski
                </StyledName>
                <StyledDescription>
                    My frontend developer skills allow to build elegant and functional applications.
                    I put a lot of effort into every project, ensuring that it meets expectations.
                </StyledDescription>
                <StyledButton href={`mailto:${email}`}>
                    <StyledTick src={tick} alt="tick" />
                    <StyledContent>
                        Hire Me
                    </StyledContent>
                </StyledButton>
            </StyledDiv>
            <Theme theme={theme} dispatch={dispatch}/>
        </StyledContainer>
    )
}

export default AboutMe;