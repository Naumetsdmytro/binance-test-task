import styled from 'styled-components';
import { FaEthereum } from 'react-icons/fa';

const StyledTitleGroup = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-family: 'Orbitron', sans-serif;
    color: #e94560;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 26px;

    @media screen and (min-width: 480px) {
        font-size: 32px;
    }
`;

export const TitleGroup = () => {
    return (
        <StyledTitleGroup>
            <FaEthereum size={40} color="#e94560" style={{ marginRight: '10px' }} />
            <Title>Crypto Exchange</Title>
        </StyledTitleGroup>
    )
}