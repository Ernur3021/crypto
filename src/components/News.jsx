import React from 'react'
import {Select, Typography, Row, Col, Card} from 'antd'
import moment from 'moment'

import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi'

const {Text, Title } = Typography;

const News = ({simplified}) => {
  const {data } = useGetCryptosNewsQuery({newsCategory: 'Cryptocurrency', count: 10})
  return (
    <div>News</div>
  )
}

export default News






