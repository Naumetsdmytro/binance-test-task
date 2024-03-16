import React, { createContext, useContext, useState, useEffect } from 'react';

type ExchangeRateContextType = {
    exchangeRate: string;
    loading: boolean;
    error: string | null;
}

type ExchangeRateProviderProps = {
    children: React.ReactNode
}

const ExchangeRateContext = createContext<ExchangeRateContextType | undefined>(undefined);

export const useExchangeRate = () => {
    const context = useContext(ExchangeRateContext);
    if (context === undefined) {
    throw new Error('useExchangeRate must be used within an ExchangeRateProvider');
    }
    return context;
};

export const ExchangeRateProvider = ({ children }: ExchangeRateProviderProps) => {
    const [exchangeRate, setExchangeRate] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    ws.onmessage = (event) => {
        const { p } = JSON.parse(event.data);
        setExchangeRate(p);
        setLoading(false);
        };
        ws.onerror = (event) => {
        setError('Failed to fetch exchange rate');
        setLoading(false);
    };

    return () => ws.close();
    }, []);

    return (
        <ExchangeRateContext.Provider value={{ exchangeRate, loading, error }}>
        {children}
        </ExchangeRateContext.Provider>
    );
};
