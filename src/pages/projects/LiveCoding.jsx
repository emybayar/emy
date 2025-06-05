import React from "react";
import Layout from "../../components/Layout";
import ProjectPage from "../../components/ProjectPage";

const LiveCoding = () => (
  <Layout>
    <ProjectPage
      title="Madison House"
      info="Live Coding | 2025"
      description={[
        "A collaborative live coding performance with Nartay Ualikhan @ Exit Shanghai in May, 2025.",
        "Using Strudel (sound) and TouchDesigner (visuals), the piece explored themes of memory, cultural inheritance, and chosen homes, both physical and emotional, through real-time audiovisual improvisation.",
      ]}
      media={[
        { type: "image", src: "/imgs/live-coding/mh.JPG" },
        {
          type: "embed",
          embedCode: `<iframe width="640" height="360" src="https://www.youtube.com/embed/otJ6m0ZwvPM" title="Madison House" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        },
      ]}
    />
    <ProjectPage
      title="上highsubroute"
      info="Live Coding | 2025"
      description={[
        "First Live Coding performance @ CEDAR KITCHEN in March, 2025.",
        "Performed with Shanghai Subroute.",
      ]}
      media={[
        // { type: "image", src: "/imgs/llms-nums/lc-1.png" },
        {
          type: "embed",
          embedCode: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1070392143?h=8c21b387de" width="640" height="360" frameborder="0"    allowfullscreen></iframe>`,
        },
        { type: "image", src: "/imgs/llms-nums/lc-2.png" },
      ]}
    />
  </Layout>
);

export default LiveCoding;
