import { StyledDiv, StyledTitle, StyledContent, StyledLi } from './styled';

const Content = ({ title }) => {
    return (
        <StyledDiv>
            <StyledTitle>{title}</StyledTitle>
            <StyledContent>
                <StyledLi>test1</StyledLi>
                <StyledLi>test2</StyledLi>
                <StyledLi>test3</StyledLi>
                <StyledLi>test4</StyledLi>
            </StyledContent>
        </StyledDiv>
    )
}

export default Content;