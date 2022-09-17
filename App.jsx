import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|welcome)">
          <Welcome {...welcomeData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const catchhouselogoData = {
    group7721: "",
};

const button21Data = {
    children: "About",
};

const button1Data = {
    button2Props: button21Data,
};

const button22Data = {
    children: "How it works",
};

const button3Data = {
    button2Props: button22Data,
};

const button23Data = {
    children: "Host a Gathering",
};

const button4Data = {
    button2Props: button23Data,
};

const button42Data = {
    children: "Member Login",
};

const button32Data = {
    button4Props: button42Data,
};

const button43Data = {
    children: "Request Invite",
    className: "button-4",
};

const button5Data = {
    button4Props: button43Data,
};

const avatar1Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133@2x.png",
    className: "",
};

const avatar2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133-1@2x.png",
    className: "ellipse-163",
};

const avatar3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133-2@2x.png",
    className: "ellipse-164",
};

const avatar4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133-3@2x.png",
    className: "ellipse-165",
};

const avatarStacked1Data = {
    avatar1Props: avatar1Data,
    avatar2Props: avatar2Data,
    avatar3Props: avatar3Data,
    avatar4Props: avatar4Data,
};

const frame95421Data = {
    frame9570: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/image-1889@2x.png",
    image1893: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/image-1893@2x.png",
    calendar: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/calendar@2x.png",
    i2000500738193720004903314204433131: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/-@2x.png",
    avatarStackedProps: avatarStacked1Data,
};

const avatar5Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133-4@2x.png",
    className: "ellipse-158",
};

const avatar6Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133-5@2x.png",
    className: "ellipse-163",
};

const avatar7Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133-6@2x.png",
    className: "ellipse-164",
};

const avatar8Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/ellipse-133-7@2x.png",
    className: "ellipse-165",
};

const avatarStacked2Data = {
    avatar1Props: avatar5Data,
    avatar2Props: avatar6Data,
    avatar3Props: avatar7Data,
    avatar4Props: avatar8Data,
};

const frame95422Data = {
    frame9570: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/image-1889-1@2x.png",
    image1893: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/image-1893-1@2x.png",
    calendar: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/calendar-1@2x.png",
    i2000500738193720004903314204433131: "",
    className: "frame-9544",
    avatarStackedProps: avatarStacked2Data,
};

const btnSecondaryData = {
    children: "Follow",
};

const icSocialFb1Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/facebook---negative@2x.png",
};

const icSocialFb2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/twitter---negative@2x.png",
};

const icSocialFb3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/linkedin---negative@2x.png",
};

const group492Data = {
    className: "group-49-1-1",
};

const group493Data = {
    className: "group-49-1",
};

const welcomeScrollingContentData = {
    gatherX: "Gather@X",
    pinnedPost: "Pinned Post",
    wantToStartYourO: "Want to start your own Launchhouse or host in- person workshops, organize a reunion or gather pople for a huge event, gather@X can help you do that.",
    hereAreSomeInspir: "Here are some inspirations to get you started..",
    someOfTheLatestG: "Some of the latest gatherins. Wanna host your own? Just  drop us an email at host@gatherat.x,  we’ll send you and invite",
    whatIfThereWasAn: <React.Fragment>What if there was an easier way for anyone with little time and motivation to host a gathering of any shape or size, from startup houses like the Launchhouse and workshops to large-scale festivals that you could attend in IRL and the virtual world with the help of the crowd instead of your guess work and hard, hard work? <br /><br />Gather@X lets anyone create gatherings fort from small to large groups, for almost anything by allowing people to choose when, where, and how they want to gather and joining you as co-host, sponsor, and volunteers to provide you all the resources and help you need. Helping you avoid all the guesswork and the hard work. All you need is inspiration. <br /><br />The capacity of the venue does not limit gatherings organized with Gatherxe; instead, you can maximize the number that can be part of your gathering because these gatherings are mirrored online and can be attended from anywhere, live during and after, helping you create and grow your community.</React.Fragment>,
    line1: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/line-1@2x.png",
    supriatnaRichard: "Supriatna Richard",
    productDesigner: "Product Designer",
    likeThisArticleShareItNow: "Like this article? share it now!",
    responses24: "Responses (24)",
    writeYourResponse: "Write your response...",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/line-1@2x.png",
    bambang: "Bambang",
    veryInspiringArticleThankYou: "Very inspiring article, thank you 👏🏻",
    x6MAgo: "6m ago",
    ceciRomanov: "Ceci Romanov",
    youAreRockGreatPost: "You are rock 🤘🏻 great post!",
    x1HAgo: "1h ago",
    frame95421Props: frame95421Data,
    frame95422Props: frame95422Data,
    btnSecondaryProps: btnSecondaryData,
    icSocialFb1Props: icSocialFb1Data,
    icSocialFb2Props: icSocialFb2Data,
    icSocialFb3Props: icSocialFb3Data,
    group491Props: group492Data,
    group492Props: group493Data,
};

const welcomeData = {
    frame9612: "https://anima-uploads.s3.amazonaws.com/projects/631c3655b693ec8ae864bc57/releases/631cccc26d0125081c2ce12c/img/frame-9612@1x.png",
    catchhouselogoProps: catchhouselogoData,
    button1Props: button1Data,
    button2Props: button3Data,
    button3Props: button4Data,
    button3Props2: button32Data,
    button5Props: button5Data,
    welcomeScrollingContentProps: welcomeScrollingContentData,
};

