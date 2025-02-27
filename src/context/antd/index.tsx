import { StyleProvider } from '@ant-design/cssinjs';
import { App, ConfigProvider } from 'antd';
import React from 'react';

type AntDesignProviderProps = {
  children?: React.ReactNode;
};

const AntDesignProvider: React.FC<AntDesignProviderProps> = ({ children }) => {
  return (
    <StyleProvider>
      <App>
        <ConfigProvider>{children}</ConfigProvider>
      </App>
    </StyleProvider>
  );
};

export default AntDesignProvider;
