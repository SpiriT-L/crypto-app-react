import { Divider, Flex, Tag, Typography } from 'antd';

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <Flex align='center'>
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: 40, marginRight: 10 }}
        />
        <Typography.Title level={2} style={{ margin: 0 }}>
          ({coin.symbol}) {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 Hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 Day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>1 Week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(2)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price Btc: </Typography.Text>
        {coin.priceBtc}Btc
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
        {coin.marketCap.toFixed(2)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap Score: </Typography.Text>
        {coin.marketCapScore.toFixed(2)}%
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>Contract Address: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>
      )}
      {coin.websiteUrl && (
        <Typography.Paragraph>
          <Typography.Text strong>Site: </Typography.Text>
          {coin.websiteUrl}
        </Typography.Paragraph>
      )}
      {coin.explorers && (
        <Typography.Paragraph>
          <Typography.Text strong>Explorers: </Typography.Text>
          <ul style={{ listStyleType: 'none' }}>
            {coin.explorers.map((explorer, index) => (
              <li key={index}>
                <a href={explorer}>{explorer}</a>
              </li>
            ))}
          </ul>
        </Typography.Paragraph>
      )}
    </>
  );
}
