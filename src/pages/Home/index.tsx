import React from "react";

import ProfilePic from "../../images/profile.jpg";
import { languages, socialMedias } from "./info.json";

import { Skill, Personal, Page } from "./style";
import SEO from "../../components/seo";

interface ItemType {
  name: string;
  color?: string;
  link?: string;
  horizontal?: boolean;
  icon?: string;
  img?: string;
  alt?: string;
}

const Item: React.FC<ItemType> = ({ name, icon, color, link, horizontal, img, alt }) => (
  <Skill.Container
    href={link}
    horizontal={!!horizontal}
    color={color}
    target="_blank"
    rel="noopener">
    {img ? <Skill.Image src={img} alt={alt} /> : <Skill.Icon className={icon} />}
    <Skill.Title>{name}</Skill.Title>
  </Skill.Container>
)

export default function Home() {
  return (
    <Page>
      <SEO title="Matheus Reis" />
      <Personal.Container>
        <Personal.About>
          <Personal.Avatar
            src={ProfilePic}
            alt="The developer of this page"
          />
          <Personal.Info>
            <Personal.Name style={{ marginTop: 20 }}>
              <h1 className="name">Matheus dos Reis de Jesus</h1>
            </Personal.Name>
            <Personal.Description>
              Com mais de 4 anos de experiência na área de desenvolvimento web e
              de software, Matheus(ou <i>reisdev</i> ) é um amante da tecnologia
              desde que se entende por gente. Já experimentou de tudo um pouco,
              e sempre procura aprender as novas tecnologias e tendências do
              mercado!
            </Personal.Description>
          </Personal.Info>
        </Personal.About>
        <Personal.Social title={"Social Media Links"}>
          {socialMedias.map((media) =>
            <Item horizontal {...media} />)}
        </Personal.Social>
      </Personal.Container>
    </Page>
  );
}
