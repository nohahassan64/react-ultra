import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../GlobalStyles'
import { InfoSec, InfoRow , InfoColumn , TextWrapper , TopLine , Heading , SubTitle , ImgWrapper , Img  } from './InfoSection.style'

const InfoSection = ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    buttonLabel,
    start,
    srcImage,
    alt
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to="/">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={srcImage} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>  
        </>
    )
}

export default InfoSection
