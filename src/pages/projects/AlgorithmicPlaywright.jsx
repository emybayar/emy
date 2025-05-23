import React from "react";
import Layout from "../../components/Layout";
import ProjectPage from "../../components/ProjectPage";

const AlgorithmicPlaywright = () => (
  <Layout>
    <ProjectPage
      title="Algorithmic Playwright"
      info="Algorithmic Theater | Ongoing"
      description={[
        "Algorithmic Playwright is my first prototype project of a research on Algorithmic Theater.",
        "The interface requires two users to work. Both users are prompted to enter their character information, select a scene setting, and then asked to act out the script co-generated by a fine-tuned GPT-4 model. In this case, the users step to the role of actors, while the AI acts as a creative collaborator.",
        "My goal with this prototype project was to explore the avenues in which an LLM might surprise you. Both the users step into the project without knowing what play they will be acting out. On top of that, a participant can only see their own character's lines, having to wait how the other participant will react to the story unfolding",
        "Presented at the IMA Show, December 2024.",
      ]}
      media={[
        {
          type: "image",
          src: "/imgs/ap/ap1.jpeg",
        },
        {
          type: "image",
          src: "/imgs/ap/ap2.jpeg",
        },
        {
          type: "embed",
          embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1081566460?h=eada15bdf9" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
        },
        {
          type: "image",
          src: "/imgs/ap/ap1.png",
        },
      ]}
    />
  </Layout>
);

export default AlgorithmicPlaywright;
