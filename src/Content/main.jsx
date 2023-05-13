import { StyledDiv, StyledTitle, StyledContent, StyledLi } from './styled';

const Content = ({ title, content }) => {

    if (content) {
        return (
            <StyledDiv>
                <StyledTitle>{title}</StyledTitle>
                <StyledContent>
                    {
                        content.map((item, index) => {
                            return (<StyledLi key={index}>
                                {item}
                            </StyledLi>)
                        })
                    }
                </StyledContent>
            </StyledDiv>
        )
    }
}

export default Content;