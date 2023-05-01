import React from "react";
import styled, { keyframes, css } from "styled-components";

function App() {
  const row1 = [
    "https://pykisku.com/wp-content/uploads/2023/04/css.png",
    "https://pykisku.com/wp-content/uploads/2023/04/html.png",
    "https://pykisku.com/wp-content/uploads/2023/04/javascript.png",
    "https://pykisku.com/wp-content/uploads/2023/04/git.png",
    "https://pykisku.com/wp-content/uploads/2023/04/redux.png",
    "https://pykisku.com/wp-content/uploads/2023/04/Thirdweb-Logo-Transparent-White-1.png",
    
    
  ];

  const row2 = [
    "https://pykisku.com/wp-content/uploads/2023/04/R-5.png",
    "https://pykisku.com/wp-content/uploads/2023/04/R-4.png",
    "https://pykisku.com/wp-content/uploads/2023/04/typescript.png",
    "https://pykisku.com/wp-content/uploads/2023/04/reactjs.png",
    "https://pykisku.com/wp-content/uploads/2023/04/nodejs.png",
    "https://pykisku.com/wp-content/uploads/2023/04/R.png",
    
    
  ];

  const row3 = [
    "https://pykisku.com/wp-content/uploads/2023/04/figma.png",
    "https://pykisku.com/wp-content/uploads/2023/04/nextjs.png",
    "https://pykisku.com/wp-content/uploads/2023/04/solidity.png",
    "https://pykisku.com/wp-content/uploads/2023/04/Rjy.jpeg",
    "https://pykisku.com/wp-content/uploads/2023/04/hardhat-logo.png",
    "https://pykisku.com/wp-content/uploads/2023/04/R-2.png",
    "https://pykisku.com/wp-content/uploads/2023/04/OIP.jpeg",
    
    
  ];

  const row4 = [
    
      
    
    
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>With Great Outcomes.</Text>
        <Note>Technology</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>

        <Marquee>
          <MarqueeGroup3>
            {row3.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup3>
          <MarqueeGroup3>
            {row3.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup3>
        </Marquee>


        <Marquee>
          <MarqueeGroup4>
            {row4.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup4>
          <MarqueeGroup4>
            {row4.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup4>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #AAA6C3;
`;

const Note = styled.div`
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 40px;
  color: #fff;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup3 = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const MarqueeGroup4 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
