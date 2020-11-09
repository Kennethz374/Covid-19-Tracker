// rfce
import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, ...props }) {
  return (
    <Card className="infoBox" onClick={props.onClick}>
      <CardContent>
        {/* Title Coronavirus */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/*  + 120k Number of cases */}
        <h2 className="infoBox__cases">{cases}</h2>

        {/* 1.2M total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
