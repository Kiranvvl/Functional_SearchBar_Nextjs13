import Image from 'next/image';

export default function Coins({ coins }) {
  return (
    <>
      <ul className=" grid grid-cols-4 mx-auto max-w-[1260px] mt-10 gap-10">
        {coins.map((coin) => (
          <li className="flex flex-col" key={coin.uuid}>
            <Image
              src={coin.iconUrl}
              alt="coin.name"
              width={70}
              height={70}
              priority
            />
            <h3 className="">{coin.name}</h3>
            <p className="">{coin.symbol}</p>
            <p className="">{coin.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
