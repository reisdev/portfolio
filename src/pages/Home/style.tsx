import styled from "styled-components";

export const Page = styled.main`
    
`

const Title = styled.title`
    display: block;
    font-size: 1rem;
    margin-top: 8px;
    height: fit-content;
    color: grey;
    &:visited {
        color: grey;
    }
`

const Icon = styled.i`
    flex: 1;
    margin: auto 10px;
    color: grey;
`

const Image = styled.img`
    height: 30px;
    width: 30px;
    object-fit: cover;
`

const Container = styled.a<{ horizontal: boolean, color: string | undefined }>`
    display: flex;
    text-decoration: none;
    flex-direction: ${props => props.horizontal ? "row" : "column"};
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    &:hover ${Icon} {
        color: ${props => props.color};
    }
    ${Title} {
        margin-top: ${props => props.horizontal ? "0px" : "8px"};
    }

    &:hover ${Title} {
        color: ${props => props.color};
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
        ${Title} {
            display: none;
        }

        ${Icon} {
            margin: auto;
        }
    }
`

export const Personal = {
    Container: styled.section`
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        height: min(100vh,768px);
        min-height: fit-content;
        background-color: #191919;
        color: white;

        @media screen and (max-width: 768px) {
            height: fit-content;
            padding-top: 30px;
        }
    `,
    About: styled.section`
        display: flex;
        max-width: 1024px;
        align-items: space-between;
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            align-items: center;
            flex-direction: column;
            ${Container} {
                margin: 5px 10px;
            }
        }
    `,
    Avatar: styled.img`
        max-height: 200px;
        max-width: 200px;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
        margin: 0px;
        transition: transform .2s ease-in, box-shadow .2s ease-out;

        &:hover {
            transform: scale(1.1);
            transition: transform .2s ease-out, box-shadow .2s ease-in;
            box-shadow: 2px 2px 20px rgba(0,0,0,.8);
        }

    `,
    Social: styled.ul`
        padding: 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: 2rem;  
        margin-top: 20px;

        @media screen and (max-width: 768px) {
            ${Container} {
                margin: 5px 10px;
            }
        }
    `,
    Info: styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px 30px;
    `,
    Name: styled.section`
        margin: 20px 0px;

        @media screen and (max-width: 768px){
            text-align: center;
        }
    `,
    Description: styled.section`
        margin-top: 10;
        line-height: 24px;
        font-size: 1.1rem;

        @media screen and (max-width: 768px){
            text-align: justify;
        }
    `
}



export const Skill = { Icon, Image, Title, Container }

