import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon></FiberManualRecordIcon>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Maldives Suspends 3 Ministers Over Insulting Remarks Against India",
        "Top News - 9009 readers"
      )}
      {newsArticle(
        "Indians Cancel Maldives Trips Amid Row Over Island Minister's Post",
        "Top News - 899 readers"
      )}
      {newsArticle(
        " IMD Predicts Rainfall In Seven States Amid Severe Cold Day Conditions",
        "Weather Update - 5682 readers"
      )}
      {newsArticle(
        "Rohit Sharma set to lead, Virat Kohli returns to T20I side as India announce squad for Afghanistan series",
        "Cricket Update - 1092 readers"
      )}
      {newsArticle("Is Redux too good?", "Code - 155 readers")}
    </div>
  );
}

export default Widgets;
