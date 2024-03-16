import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

type ActionSelectProps = {
    action: string;
    setSelectedAction: (value: string) => void;
}

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
    -webkit-appearance: none; 
    -moz-appearance: none; 
    appearance: none;
    padding: 15px;
    border-radius: 5px;
    border: none;
    width: 100%;
    font-size: 16px;
    background-color: #0f3460;
    color: #e5e5e5;

    &:hover {
        cursor: pointer;
    }
`;

const CustomArrow = styled.div`
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    width: 20px;
    background: #0f3460;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;

export const ActionSelect = ({ action, setSelectedAction }: ActionSelectProps) => {
    return (
    <SelectWrapper>
        <Select value={action} onChange={(e) => setSelectedAction(e.target.value)}>
            <option value="buy">Buy with USDT</option>
            <option value="sell">Sell for USDT</option>
        </Select>
        <CustomArrow>
            <FaChevronDown color="#e5e5e5" />
        </CustomArrow>
    </SelectWrapper>
    )
}