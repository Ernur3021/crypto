import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return('Fetching...');
  return (
    <>
    <Typography.Title className='heading' level={2}>
      Global Crypto Stats
    </Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total cryptos" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap " value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h volume" value={`${millify(globalStats.total24hVolume)}`}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={globalStats.totalMarkets}/></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.totalCoins}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2}>
          Top 10 cryptos
        </Typography.Title>
        <Typography.Title level={3}>
          <Link to='/cryptocurrencies'>Show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified={true}/>
      <div className='home-heading-container'>
        <Typography.Title level={2}>
          Latest News
        </Typography.Title>
        <Typography.Title level={3}>
          <Link to='/news'>Show more</Link>
        </Typography.Title>
      </div>
      <News simplified={true}/>
    </>
  )
}

export default Homepage