import { Select, Space } from 'antd';
import { useState } from 'react';
import { useCrypto } from '../context/crypto-context';

export default function AddAssetForm() {
  const { crypto } = useCrypto();
  const [coin, setCoin] = useState(null);

  if (!coin) {
    return (
      <Select
        style={{ width: '100%' }}
        onSelect={value => setCoin(crypto.find(c => c.id === value))}
        placeholder='Select coin'
        options={crypto.map(coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={option => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{' '}
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  return <form>Form Asset</form>;
}
