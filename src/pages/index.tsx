import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;
const Title = styled.div`
  text-align: center;
  font-size: 28px;
  line-height: 1.5;
  font-weight: bold;
  color: #161616;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>New Light Handbook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Webpage Under Construction
          <br />
          Please Visit Later
        </Title>
      </Main>
    </>
  );
}
