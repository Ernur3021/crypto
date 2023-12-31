import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '29c3345dbcmshd2abb9a719b4570p1af0b5jsn94f7646fc1e7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/search';

 
  const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptosNewsQuery
} = cryptoNewsApi