import React from "react";

import ProfilePic from "../../images/profile.jpg";
import { languages, socialMedias, experiences } from "./info.json";

import {
  Page, SkillContainer,
  SkillImage, SkillIcon,
  PersonalContainer, PersonalAbout, PersonalAvatar,
  PersonalInfo, PersonalName, PersonalDescription,
  PersonalSocial, ExperienceContainer, ExperienceCard
} from "./style";
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
  <SkillContainer
    href={link}
    horizontal={!!horizontal}
    color={color}
    target="_blank"
    title={alt}
    rel="noopener">
    {img ? <SkillImage src={img} alt={alt} /> : <SkillIcon className={icon} />}
  </SkillContainer>
)

export default function Home() {
  return (
    <Page>
      <SEO title="Matheus Reis" />
      <PersonalContainer>
        <PersonalAbout>
          <PersonalAvatar
            src={ProfilePic}
            alt="A picture of the developer of this page, Matheus Reis. He is wearing a salmon color t-shirt and smiling."
          />
          <PersonalInfo>
            <PersonalName>
              <h1 className="name">Matheus dos Reis de Jesus</h1>
            </PersonalName>
            <PersonalDescription>
              Com mais de 4 anos de experiência na área de desenvolvimento web e
              de software, Matheus(ou <i>reisdev</i>) é um amante da tecnologia
              desde que se entende por gente. Já experimentou de tudo um pouco,
              e sempre procura aprender as novas tecnologias e tendências do
              mercado!
            </PersonalDescription>
          </PersonalInfo>
        </PersonalAbout>
        <PersonalSocial>
          {socialMedias.map((media) =>
            <Item horizontal {...media} />)}
        </PersonalSocial>
      </PersonalContainer>
      <ExperienceContainer>
        <h1>Experiências</h1>
        {experiences.map(({ company, role, initDate, endDate, description }, index) => (
          <ExperienceCard key={`experience-${index}`}>
            <aside>
              <h3>
                {company}
              </h3>
              <span>
                {initDate} - {endDate}
              </span>
            </aside>
            <main>
              <h4>
                {role}
              </h4>
              {
                description.map((content, index) => <p key={`${company}-${index}`}>{content}</p>)
              }
            </main>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </Page>
  );
}
