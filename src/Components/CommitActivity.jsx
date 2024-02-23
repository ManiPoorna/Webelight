/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Skeleton } from "@mui/material";
import fetchCommitActivity from "../Data/FetchCommitActivity";

const CommitActivity = ({owner,repo}) => {
  const [commitData, setCommitData] = useState(null);


  const getData = async() => {
    let data = await fetchCommitActivity(owner,repo);
    if (data != undefined) {
      setCommitData(data)
      return 
    }
    setCommitData([])
  }

  useEffect(() => {
    getData();
  }, []);

  const options = {
    chart: {
      width: 800,
      height: 250,
    },
    title: {
      text: "Github Commit Activity",
    },
    xAxis: {
      type: "category",
      title: {
        text: "Week",
      },
    },
    yAxis: {
      title: {
        text: "Number of Commits",
      },
    },
    series: [
      {
        name: "Commits",
        data: commitData!=null ? commitData.map((week) => week.total) : [],
      },
    ],
  };

  return (
    <div>
      <h2>Commit Activity Chart</h2>
      {commitData ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
          <Skeleton variant="rectangular" width={210} height={60} />
      )}
    </div>
  );
};

export default CommitActivity;