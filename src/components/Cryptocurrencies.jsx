import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
	const count = simplified ? 10 : 50;
	const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

	const [cryptos, setCryptos] = useState(cryptosList?.data?.coins || []);
	const [searchTerm, setSearchTerm] = useState('');
	
	useEffect(() => {
		setCryptos(cryptosList?.data?.coins)
		const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));

		setCryptos(filteredData)
	}, [cryptos, searchTerm])

	if (isFetching) return 'Loading cryptos....';
	return (
		<>
			{
				!simplified && (
					<div className='search-crypto'>
						<Input 
							placeholder='search-crypto...'
							onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())}
						/>
				</div>
				)
			}
			
			<Row className='crypto-card-container' gutter={[32, 32]}>
				{
					cryptos?.map((crypto) => (
						<Col key={crypto.uuid} xs={24} sm={12} lg={6} className='crypto-card'>
							<Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
								<Card
									title={`${crypto.rank}. ${crypto.name}`}
									extra={<img className='crypto-image' src={crypto.iconUrl}/>}
								>
									<p>Price: {crypto.price}</p>
									<p>Market Cap: {crypto.marketCap}</p>
									<p>Daily Change: {crypto.change}</p>
								</Card>
							</Link>
						</Col>
					))
				}
			</Row>

		</>
	)
}

export default Cryptocurrencies