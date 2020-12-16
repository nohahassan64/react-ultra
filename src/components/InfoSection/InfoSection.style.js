import styled from 'styled-components'

export const InfoSec = styled.div`
    padding: 160px 0 ;
    color: #fff;
    background: ${({lightBg}) => (lightBg ? "#fff" : "#101522")};
`;
export const InfoRow = styled.div`
    margin: 0 -15px -15px --15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => imgStart ? 'row-reverse' : 'row'};
`;
export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 100%;
    flex-basis: 100%;
    }
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    max-width: 540px;
@media screen and (max-width: 768px) {
    padding-bottom: 65px;
    }
`;
export const TopLine = styled.div`
    margin-bottom: 16px;
    line-height: 16px;
    font-size: 18px;
    letter-spacing: 1.4px;
    color: ${({lightTopLine}) => lightTopLine ? '#a9b3c1' : '#4b59f7'};
`;
export const Heading = styled.div`
    margin-bottom: 24px;
    line-height: 1.1;
    font-size: 48px;
    color: ${({lightText}) => lightText ? '#f7f8fa' : '#1c2237'};
`;
export const SubTitle = styled.div`
    margin-bottom: 35px;
    line-height: 24px;
    font-size: 18px;
    max-width: 440px;
    color: ${({lightTextDesc}) => lightTextDesc ? '#a9b3c1' : '#1c2237'};
`;
export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => start ? 'flex-start' : 'flex-end'};
`;
export const Img = styled.img`
    vertical-align: middle;
    max-width: 100%;
    max-height: 500px;
    display: inline-block;
    padding-right: 0;
    border: 0;    
`;