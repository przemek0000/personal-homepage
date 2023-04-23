import { StyledDiv, StyledTitle, StyledContent, StyledLi } from './styled';

const Content = ({ title, content }) => {
    let list = "";

    console.log(list)

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