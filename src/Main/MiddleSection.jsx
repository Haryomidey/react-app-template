import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import MyPhoto from '../images/profileImage/My_profile.jpg';
import { AudienceWorldIcon, CalendarIcon, CheckIcon, EmojiIcon, GifIcon, ImageIcon, LocationIcon, PlusIcon, PollIcons, WorldIcon } from '../TweetIcons';
import TweetCard from './TweetCard';


const Container = styled.div`
    width: 60%;
    min-height: 100vh;
    border-right: 1px solid #71767b6c;
    position: relative;
    color: #E7E9EA;
`;

const Navbar = styled.div`
    height: 120px;
    width: calc(46% + 2px);
    border-bottom: 1px solid #71767b6c;
    position: fixed;
    top: 0;
    left: 23%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PageTitle = styled.h1`
    margin: 15px;
    font-weight: 600;
    font-size: 1.4rem;
`;

const NavbarBottomSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 20px;
    height: 60px;
`;

const ForYouWrapper = styled.div`
    font-weight: 600;
    width: 50%;
    flex-basis: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #1D1F23;
    }
`;

const ForYou = styled.p`
    height: 100%;
    display: flex;
    align-items: center;
    width: fit-content;
    position: relative;

    &::after{
        content: '';
        width: 100%;
        height: 4px;
        background: #1D9BF0;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 10px;
    }
`;

const FollowingWrapper = styled.div`
    width: 50%;
    flex-basis: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #1D1F23;
    }
`;

const Following = styled.p`
    color: #71767B;
    display: flex;
    align-items: center;
`;

const InputSection = styled.div`
    // position: relative;
    margin-top: 120px;
    padding-left: 15px;
    display: flex;
    gap: 15px;
    min-height: 120px;
    border-bottom: 1px solid #71767b6c;
`;

const ProfileImage = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-top: 8px;
`;

const TweetSection = styled.div`
    height: 100%;
    width: 100%;
`;

const EveryoneWrapper = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #1D9BF0;
    padding: 0 10px;
    color: #1D9BF0;
    margin-top: 8px;
    width: 100px;
    position: relative;
    cursor: default;
    user-select: none;

    ${props => props.active && css`
    display: flex;
  `}
`;

const Everyone = styled.div`
    font-size: .9rem;
`;

const ExpandIcon = styled.span`
    font-size: 1.3rem;
`;

const ChooseAudience = styled.div`
    position: absolute;
    width: 300px;
    min-height: 250px;
    background: black;
    box-shadow: 0 0 10px rgba(161, 160, 160, 0.507);
    top: 10%;
    left: 1%;
    transform: translate(-20%, 16%);
    border-radius: 20px;
    padding-bottom: 10px;
`;

const ChooseAudienceTitle = styled.h1`
    color: white;
    margin: 18px 15px;
    font-size: 1.4rem;
`;

const EachAudience = styled.div`
    width: 100%;
    height: 75px;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover{
        background: #16181C;
    }
`;

const AudienceLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: white;
`;

const AudienceLogo = styled.div`
    background: #1D9BF0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TweetInput = styled.textarea`
    width: 98%;
    word-break: break-all;
    min-height: 20px;
    margin-top: 20px;
    color: white;
    background: black;
    font-size: 1.5rem;
    font-weight: 300;
    padding-left: 10px;
    display: flex;
    align-items: center;
    outline: none;
    border: 0;
    resize: none;

    &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
    }

    &::placeholder{
        font-size: 1.3rem;
    }
`;

const EveryoneReply = styled.div`
    width: 180px;
    display: none;
    align-items: center;
    gap: 7px;
    padding: 3px 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s ease;

    ${props => props.active && css`
        display: flex;
  `}

    &:hover{
        background: #031018;
    }
`;

const EveryoneReplyIcon = styled.div`
    margin-top: 3px;
`;
const EveryoneReplyText = styled.p`
    color: #1D9BF0;
    font-size: .9rem;
    font-weight: 600;
`;

const EmojiContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 96%;
    height: 60px;
    margin-top: -20px;
    
    ${props => props.active && css`
        margin-top: 0;
        border-top: 1px solid #71767b6c;
  `}
`;

const EmojiWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;
const TweetButtonContainer = styled.div`
    height: 40px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 130px;
`;

const TweetLengthContainer = styled.div`
    display: none;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 30px;
    margin-right: 10px;

    ${props => props.active && css`
        display: flex;
  `}
`;

const TweetLength = styled.div`
    border: 2px solid #71767b6c;
    width: 22px;
    height: 22px;
    border-radius: 50%;
`;
const ShowTweetBox = styled.div`
    width: 22px;
    height: 22px;
    border: 1px solid #1D9BF0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 1px;
        height: 30px;
        background: #71767b6c;
        top: -5px;
        left: -80%;
    }
`;
const TweetButton = styled.button`
    width: 80px;
    height: 35px;
    border: 0;
    outline: none;
    background: #1D9BF0;
    border-radius: 30px;
    margin-left: auto;
    color: white;
    font-weight: 600;
    opacity: 0.6;
`;

const ShowTweetNums = styled.div`
    width: 100%;
    border-bottom: 1px solid #71767b6c;
    height: 50px;
    display: grid;
    place-items: center;
`;
const ShowTweetNumsText = styled.div`
    color: #1D9BF0;
`;

const MiddleSection = () => {
    const [audience, setAudience] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [tweetNums, setTweetNums] = useState(Math.floor(Math.random() * 901) + 100);
    
    const showAudience = () => {
        setAudience(!audience)
    }

    const handleInputClick = () => {
        setShowDetails(true)
    }

    const generateRandomNum = () => {
        return Math.floor(Math.random() * 901) + 100;
    }

    
    useEffect(() => {
        setTimeout(() => {
            setTweetNums(generateRandomNum())
        }, 12000)
    }, [tweetNums])

  return (
    <Container>
        <Navbar>
            <PageTitle>
                Home
              </PageTitle>
              <NavbarBottomSection>
                  <ForYouWrapper>
                    <ForYou>
                        For you
                    </ForYou>
                 </ForYouWrapper>
                  <FollowingWrapper>
                      <Following>
                        Following
                      </Following>
                  </FollowingWrapper>
              </NavbarBottomSection>
        </Navbar>
        <InputSection>
            <ProfileImage src = {MyPhoto} />
            <TweetSection>
                <EveryoneWrapper active={showDetails}>
                    {audience 
                    ? 
                    <ChooseAudience>
                        <ChooseAudienceTitle>
                            Choose Audience
                        </ChooseAudienceTitle>
                        <EachAudience>
                            <AudienceLogoWrapper>
                                <AudienceLogo>
                                    <AudienceWorldIcon />
                                </AudienceLogo>
                                <p>
                                    Everyone
                                </p>
                            </AudienceLogoWrapper>
                            <p>
                                <CheckIcon />
                            </p>
                        </EachAudience>
                        <EachAudience>
                            <AudienceLogoWrapper>
                                <AudienceLogo>
                                    <AudienceWorldIcon />
                                </AudienceLogo>
                                <p>Everyone</p>
                            </AudienceLogoWrapper>
                            <p><CheckIcon /></p>
                        </EachAudience>
                    </ChooseAudience>
                        :
                    ''
                    }
                <Everyone onClick = {showAudience}>
                    Everyone
                </Everyone>
                <ExpandIcon className="material-symbols-outlined" onClick = {showAudience}>
                expand_more
                </ExpandIcon>
                </EveryoneWrapper>
                <TweetInput onClick = {handleInputClick} placeholder = "What's happening?">
                </TweetInput>
                <EveryoneReply active={showDetails}>
                    <EveryoneReplyIcon>
                        <WorldIcon />
                    </EveryoneReplyIcon>
                    <EveryoneReplyText>
                        Everyone can reply
                    </EveryoneReplyText>
                </EveryoneReply>
                <EmojiContainer active={showDetails}>
                    <EmojiWrapper>
                        <ImageIcon />
                        <GifIcon />
                        <PollIcons />
                        <EmojiIcon />
                        <CalendarIcon />
                        <LocationIcon />
                    </EmojiWrapper>
                    <TweetButtonContainer>
                        <TweetLengthContainer active={showDetails}>
                            <TweetLength>
                            
                            </TweetLength>
                            <ShowTweetBox>
                                <PlusIcon />
                            </ShowTweetBox>
                        </TweetLengthContainer>
                        <TweetButton>
                            Tweet
                        </TweetButton>
                    </TweetButtonContainer>
                </EmojiContainer>
            </TweetSection>
        </InputSection>
        <ShowTweetNums>
            <ShowTweetNumsText>
                Show {tweetNums} tweets
            </ShowTweetNumsText>
        </ShowTweetNums>
        <TweetCard />
    </Container>
  )
}

export default MiddleSection