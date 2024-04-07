import { Icon } from "@iconify/react";
import { useState } from "react";
import { Howl, Howler } from "howler";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../containers/LoggedInContainer";

const Home = () => {
  return (
    <LoggedInContainer curActiveScreen="home">
      <Playlistview titleText="Focus Shift" cardsData={focusCardData} />
      <Playlistview titleText="CloudPlay Playlist" cardsData={focusCardData} />
      <Playlistview titleText="Sound Of India" cardsData={focusCardData} />
    </LoggedInContainer>
  );
};

const Playlistview = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-around space-x-1">
        {cardsData.map((item) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imgURL={item.imgURL}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, description, imgURL }) => {
  return (
    <div className="bg-black bg-opacity-50 w-1/6 p-4 rounded">
      <div className="py-2">
        <img className="w-full rounded-md h-50" src={imgURL} alt="label" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-400 text-sm">{description}</div>
    </div>
  );
};

const focusCardData = [
  {
    title: "It's just love",
    description:
      "A joyous celebration of the simple, yet profound, power of love.",
    imgURL:
      "https://i.pinimg.com/564x/f7/fa/41/f7fa417114bbcc5af2c573ccdf52b416.jpg",
  },
  {
    title: "Rigor Mortis",
    description:
      "A haunting and intense track that explores the darker facets of existence.",
    imgURL:
      "https://i.pinimg.com/564x/f7/fa/41/f7fa417114bbcc5af2c573ccdf52b416.jpg",
  },
  {
    title: "Second Second Chance",
    description:
      "A hopeful anthem of redemption and the opportunity to start anew.",
    imgURL:
      "https://i.pinimg.com/564x/f7/fa/41/f7fa417114bbcc5af2c573ccdf52b416.jpg",
  },
  {
    title: "Sideshow Bob",
    description:
      "A quirky and offbeat tune that tells the story of an eccentric character.",
    imgURL:
      "https://i.pinimg.com/564x/f7/fa/41/f7fa417114bbcc5af2c573ccdf52b416.jpg",
  },
  {
    title: "Weight",
    description:
      "A soulful ballad that carries the emotional burden of love lost.",
    imgURL:
      "https://i.pinimg.com/564x/f7/fa/41/f7fa417114bbcc5af2c573ccdf52b416.jpg",
  },
];

export default Home;
