import styled from "styled-components"

type ContainerProps = {
    children: React.ReactNode
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Container = ({ children }: ContainerProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}