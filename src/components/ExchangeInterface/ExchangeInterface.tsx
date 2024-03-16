import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEthereum } from 'react-icons/fa';

import { useExchangeRate } from '../../context/ExchangeRateContext';
import { ActionSelect } from '../ActionSelect';

const ExchangeInterfaceContainer = styled.div`
    background-color: #16213e;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    width: calc(100% - 40px);
    max-width: 500px;
    margin: 60px auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    width: 100%;
`;

const InputGroup = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const Input = styled.input`
    background: rgba(255, 255, 255, 0.1); 
    border: 1px solid rgba(255, 255, 255, 0.2);
    outline: none;
    color: #e5e5e5;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

const Result = styled.div`
    font-size: 18px;
`;

export const ExchangeInterface = () => {
  const { exchangeRate } = useExchangeRate();
  const [ethAmount, setEthAmount] = useState('');
  const [action, setAction] = useState('buy');

  const calculateResult = () => {
    if (!exchangeRate) return '';

    const rate = parseFloat(exchangeRate);
    const inputEthAmount = parseFloat(ethAmount);

    if (isNaN(inputEthAmount) || isNaN(rate)) return '';

    return action === 'buy' ? (inputEthAmount * rate).toFixed(4) : (inputEthAmount * rate).toFixed(4);
  };

  return (
    <ExchangeInterfaceContainer>
      <Form>
        <InputGroup>
          <FaEthereum size={35} color="#e94560" style={{ marginRight: '10px' }} />
          <Input
            type="number"
            value={ethAmount}
            onChange={(e) => setEthAmount(e.target.value)}
            placeholder="Amount of ETH"
          />
        </InputGroup>
        <ActionSelect action={action} setSelectedAction={setAction}/>
      </Form>
      <Result>
        USDT {action === 'buy' ? 'needed' : 'received'}: {calculateResult()}
      </Result>
    </ExchangeInterfaceContainer>
  );
};
