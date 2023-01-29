import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MultiStepProgressBar from "./MultiStepProgressBar";
import CampaignContainer from "./CampaignContainer";
import GetStarted from "./GetStarted";
import ChooseProduct from "./ChooseProduct";
import CampaignSettings from "./CampaignSettings";
import ReadyToGo from "./ReadyToGo";

export default function CampaignCard() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      {progress >= 1 && progress <= 4 && (
        <MultiStepProgressBar
          progress={progress}
          setProgress={setProgress}
        ></MultiStepProgressBar>
      )}
      {progress === 0 && (
        <CampaignContainer progress={progress} setProgress={setProgress} />
      )}
      {progress === 1 && (
        <GetStarted progress={progress} setProgress={setProgress} />
      )}
      {progress === 2 && (
        <ChooseProduct progress={progress} setProgress={setProgress} />
      )}
      {progress === 3 && (
        <CampaignSettings progress={progress} setProgress={setProgress} />
      )}
      {progress === 4 && (
        <ReadyToGo progress={progress} setProgress={setProgress} />
      )}
    </>
  );
}
