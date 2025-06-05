import Layout from "../../components/Layout";
import ProjectPage from "../../components/ProjectPage";

const Crawler525 = () => (
  <Layout>
    <ProjectPage
      title="crawler525"
      info="ML-Driven Agent Simulation | Unity | 2025"
      description={[
        "Trained using Proximal Policy Optimization (PPO) via Unity’s ML-Agents Toolkit, this reinforcement learning agent crawls toward dynamic targets across a terrain.",
        "crawler525 autonomously developed its own form of locomotion, exhibiting emergent, goal-driven behavior.",
        "Presented at the IMA Show, May 2025.",
      ]}
      media={[
        // {
        //   type: "image",
        //   src: "/imgs/crawler/crawler-show-img.JPG",
        // },
        {
          type: "embed",
          //   embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1081535254?h=f32784ca2f" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
          embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1090811110?h=7be2165b9b" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
        },
      ]}
    />
  </Layout>
);

export default Crawler525;
