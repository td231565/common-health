import { ofetch } from 'ofetch'

const useFetch = ofetch.create({})

const newsKey = import.meta.env.VITE_NEWS_API

export const getNews = () =>
  useFetch(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${newsKey}&country=ca`
  )

export default {
  getNews,
}
