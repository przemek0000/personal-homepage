import Theme from '../features/theme/main';
import StyledContainer,
{
    StyledImg, StyledDiv, StyledTitle, StyledName,
    StyledDescription, StyledButton, StyledIcon,
    StyledContent, StyledTick
} from './styled';
import expand from '../expand_more.svg';

const AboutMe = () => {
    const imageUrl = "https://ichef.bbci.co.uk/news/976/cpsprodpb/15951/production/_117310488_16.jpg.webp";

    return (
        <StyledContainer>
            <StyledImg src={imageUrl} alt="Image" />
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
                    <StyledIcon>
                        <StyledTick src={expand} alt="image" />
                    </StyledIcon>
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