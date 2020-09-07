import styled from "styled-components";

export const Page = styled.main`
    
`

export const SkillTitle = styled.title`
    display: block;
    font-size: 1rem;
    margin-top: 8px;
    height: fit-content;
    color: var(--white);
    &:visited {
        color: grey;
    }
`

export const SkillIcon = styled.i`
    flex: 1;
    margin: auto 20px;
    font-size: 45px;
    color: #D1908C;
    transform: scale(1);
    transition: color .5s ease-in-out, transform .2s ease-out;
`

export const SkillImage = styled.img`
    height: 30px;
    width: 30px;
    object-fit: cover;
`

export const SkillContainer = styled.a<{ horizontal: boolean, color: string | undefined }>`
    display: flex;
    text-decoration: none;
    flex-direction: ${props => props.horizontal ? "row" : "column"};
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    &:hover ${SkillIcon} {
        color: ${props => props.color};
        transform: scale(1.2);
        transition: color .5s ease-in-out, transform .2s ease-in;
    }
    ${SkillTitle} {
        margin-top: ${props => props.horizontal ? "0px" : "8px"};
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
        ${SkillTitle} {
            display: none;
        }

        ${SkillIcon} {
            margin: auto;
        }
    }
`

export const PersonalContainer = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    height: min(100vh,768px);
    min-height: fit-content;
    background: linear-gradient(var(--primary) 85%, var(--secondary) 100%);
    color: white;
    position: relative;
    z-index:1;

    @media screen and (max-width: 768px) {
        height: fit-content;
        padding-top: 30px;
    }
`

export const PersonalAbout = styled.section`
    display: flex;
    max-width: 1024px;
    align-items: space-between;
    justify-content: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        ${SkillContainer} {
            margin: 5px 10px;
        }
    }
`;
export const PersonalAvatar = styled.img`
    max-height: 250px;
    max-width: 250px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    margin: 0px;
    transition: transform .2s ease-in, box-shadow .2s ease-out;

    &:hover {
        transform: scale(1.1);
        transition: transform .2s ease-out, box-shadow .2s ease-in;
        box-shadow: 2px 2px 20px rgba(23, 37, 46,.8);
    }

    @media screen and (max-width: 768px){
        margin-bottom:20px;
    }

`;
export const PersonalSocial = styled.ul`
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 2rem;  
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        ${SkillContainer} {
            margin: 10px;
        }
    }
`;
export const PersonalInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;

    @media screen and (max-width: 768px){
        padding-right: 30px;
    }
`;

export const PersonalName = styled.section`
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const PersonalDescription = styled.section`
    margin-top: 10px;
    line-height: 30px;
    font-size: 1.4rem;

    @media screen and (max-width: 768px){
        text-align: justify;
    }
`

export const ExperienceContainer = styled.section`
    min-height: 800px;
    padding-top: 20px;
    background: var(--secondary);
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const ExperienceCard = styled.article`
    display: flex;
    width: fit-content;
    margin: 20px;
    font-size: 1.1rem;
    line-height: 30px;

    header {
        font-family: "Bitter",sans-serif;
        font-weight: 700;
    }

    aside {
        display: flex;
        flex: 1;
        flex-direction: column;
        border-right: 1px solid var(--primary);
        text-align: left;
        padding: 20px;
        min-width: fit-content;
    }

    aside h3 {
        margin-bottom: 20px;
    }

    main {
        padding: 20px;
        max-width: 768px;
    }

    main h4 {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        aside {
            flex-direction: row;
            justify-content: space-between;
            border-right: none;
            border-bottom: 1px solid var(--primary);
        }

        aside h3 {
            margin-bottom: 0px;
        }
    }
`