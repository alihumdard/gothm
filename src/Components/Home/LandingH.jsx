import React, { Suspense } from "react";

import Hero from "./Hero";

const WhatIsGothm = React.lazy(() => import("./WhatIsGothm"));
const EpisodesAndBlog = React.lazy(() => import("./EpisodesAndBlog"));
const AboutHost = React.lazy(() => import("./AboutHost"));
const GhostMailContact = React.lazy(() => import("./GhostMailContact"));

const LandingH = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <WhatIsGothm />
        <EpisodesAndBlog />
        <AboutHost />
        <GhostMailContact />
      </Suspense>
    </>
  );
};

export default LandingH;
