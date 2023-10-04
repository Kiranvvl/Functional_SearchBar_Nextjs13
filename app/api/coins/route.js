import { NextResponse } from 'next/server';

async function fetchCoins() {
  const res = await fetch(
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f47469cb84msh8b8a1b21a3ee365p1f8cb6jsnd73d428c22a8',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    }
  );
  const coins = await res.json();

  return coins;
}

export async function GET(request) {
  const coins = await fetchCoins();
  return NextResponse.json(coins);
}
