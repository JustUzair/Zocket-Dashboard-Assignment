import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";

//LIBRARIES
import {
  Card,
  Grid,
  CardContent,
  IconButton,
  Button,
  Checkbox,
  Switch,
} from "@material-ui/core";

import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//CSS
import "./CampaignCard.css";

//IMAGES
import cakeCampaign from "../../images/cake-campaign.svg";
import facebookSVG from "../../images/facebook.svg";
import youtubeSVG from "../../images/youtube.svg";
import googleSVG from "../../images/google.svg";

const gridSpacing = 3;

function createData(
  toggle,
  campaignName,
  createdAt,
  campaignImg,
  dateRange,
  clicks,
  budget,
  location,
  platform,
  status,
  statusTxt
) {
  return {
    toggle,
    campaignName,
    createdAt,
    campaignImg,
    dateRange,
    clicks,
    budget,
    location,
    platform,
    status,
    statusTxt,
  };
}

const rows = [
  createData(
    "true",
    "blueberry cake",
    "14 July",
    cakeCampaign,
    "25 Jul 2020 - 01 Aug 2020",
    100,
    3400,
    "Chennai",
    "facebook",
    "live",
    "Live Now"
  ),
  createData(
    "true",
    "blueberry cake",
    "14 July",
    cakeCampaign,
    "25 Jul 2020 - 01 Aug 2020",
    100,
    3400,
    "Coimbatore",
    "google",
    "live",
    "Live Now"
  ),
  createData(
    "true",
    "blueberry cake",
    "14 July",
    cakeCampaign,
    "25 Jul 2020 - 01 Aug 2020",
    100,
    3400,
    "Coimbatore",
    "youtube",
    "exhausted",
    "Exhausted"
  ),
  createData(
    "true",
    "blueberry cake",
    "14 July",
    cakeCampaign,
    "25 Jul 2020 - 01 Aug 2020",
    100,
    3400,
    "Erode",
    "facebook",
    "paused",
    "Paused"
  ),
];

const statusColorCodes = {
  live: {
    bgColor: "#E1FFE0",
    textColor: "#317C2E",
  },
  paused: { bgColor: "#FFF8E0", textColor: "#D1A307" },
  exhausted: { bgColor: "#FFDEDE", textColor: "#FC3F3F" },
};

const serviceProvider = {
  facebook: facebookSVG,
  google: googleSVG,
  youtube: youtubeSVG,
};

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  imgproduct: {
    width: "20px",
    height: "auto",
  },
});
const CampaignContainer = ({ progress, setProgress }) => {
  const classes = useStyles();
  //------------------------- select all checkbox--------------------------------
  const [globalCheck, setGlobalCheck] = useState(false);
  const allItems = [];
  for (let i = 0; i < rows.length; i++) {
    allItems.push({ name: rows[i].campaignName, checked: false });
  }
  const [items, setItems] = useState([
    ...allItems.map((x, id) => ({ id, ...x })),
  ]);
  // handle check & uncheck all buttons click
  const handleClick = e => {
    if (["master-checkbox", "uncheck"].includes(e.target.name)) {
      // determine whether to update 'checked' to true or false
      const updateChecked = e.target.name === "master-checkbox";
      if (e.target.name === "master-checkbox") e.target.name = "uncheck";
      else e.target.name = "master-checkbox";
      setItems(prev => [
        ...prev.map(({ checked, ...rest }) => ({
          ...rest,
          checked: updateChecked,
        })),
      ]);
    }
  };
  //------------------------- select all checkbox--------------------------------
  return (
    <div>
      <div className="campaign--container">
        <div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "32px",
            }}
          >
            Your campaigns
          </div>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
            }}
          >
            Check the list of campaigns you created
          </span>
          <br />
          <br />

          <Button
            onClick={e => {
              setProgress(1);
            }}
            style={{
              float: "right",
              background: " #0F6EFF",
              borderRadius: "10px",
              position: "absolute",
              width: "237px",
              height: "50px",
              lineHeight: "50px",
              right: "112px",
              top: "150px",
            }}
            // size="lg"
          >
            <span
              style={{
                fontStyle: "normal",
                fontSize: "16px",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "20px", lineHeight: "20px" }}>
                <AiOutlinePlusCircle></AiOutlinePlusCircle>
              </span>
              <span
                style={{
                  paddingLeft: "10px",
                  textTransform: "capitalize",
                  fontWeight: "500 !important",
                  paddingTop: "2px",
                }}
              >
                {" "}
                Create new campaign
              </span>
            </span>
          </Button>
        </div>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid
              item
              xs={12}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                border: "1px solid #DAE6FF !important",
              }}
            >
              <div className="d-flex flex-column flex-grow-1">
                <div>
                  <div className="d-flex bd-highlight">
                    <div className=" flex-grow-1 bd-highlight form">
                      <div className="form-field">
                        <input
                          type="text"
                          placeholder="Search for the campaign"
                          style={{
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "32px",
                          }}
                        />
                        {/* <span class="icon">🔍</span> */}
                        <span className="icon">
                          <CiSearch></CiSearch>
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bd-highlight">
                      <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                        Platform:{" "}
                      </span>{" "}
                      <button
                        className="btn btn-outline-secondary dropdown-toggle filter-btn"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All platform
                      </button>
                    </div>
                    <div className="p-2 bd-highlight">
                      <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                        Status:{" "}
                      </span>{" "}
                      <button
                        className="btn btn-outline-secondary dropdown-toggle filter-btn"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All Status
                      </button>
                    </div>
                    <div className="p-2 bd-highlight">
                      {" "}
                      <button
                        className="btn btn-outline-secondary dropdown-toggle filter-btn"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Last 30 days
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                {/* <Divider /> */}
                <CardContent className="p-0">
                  <TableContainer>
                    <Table
                      className={classes.table}
                      aria-label="simple table"
                      style={{
                        background: "#F8F8F8",
                        borderRadius: "15px !important",
                      }}
                    >
                      <TableHead>
                        <TableRow
                          style={{
                            background: "#EAEAEA",
                            fontWeight: 500,
                          }}
                        >
                          <TableCell>
                            <Checkbox
                              name="master-checkbox"
                              className="master-checkbox"
                              checked={globalCheck}
                              onChange={e => {
                                setGlobalCheck(!globalCheck);
                                handleClick(e);
                              }}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          </TableCell>
                          <TableCell>On/Off</TableCell>
                          <TableCell>Campaign</TableCell>
                          <TableCell>Date Range</TableCell>
                          <TableCell>Clicks</TableCell>
                          <TableCell>Budget</TableCell>
                          <TableCell>Location</TableCell>
                          <TableCell>Platform</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Checkbox
                                checked={items[index].checked}
                                onChange={e => {
                                  // checkbox has changed
                                  // track using item.id and flip 'checked'

                                  const curr = items;

                                  curr[items[index].id].checked =
                                    !curr[items[index].id].checked;
                                  setItems([...curr]);
                                }}
                              />
                            </TableCell>
                            <TableCell className="on-off--switch">
                              <Switch defaultChecked />
                            </TableCell>
                            <TableCell>
                              <div
                                className="campaign-summary"
                                style={{ textTransform: "capitalize" }}
                              >
                                <img
                                  src={row.campaignImg}
                                  alt={row.campaignImg}
                                />
                                <div style={{ marginLeft: "10px" }}>
                                  <span
                                    style={{ fontWeight: "bold" }}
                                  >{`${row.campaignName} Campaign`}</span>
                                  <br />
                                  Created on {row.createdAt}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{row.dateRange}</TableCell>
                            <TableCell>{row.clicks}</TableCell>
                            <TableCell>INR.{row.budget}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell
                              style={{
                                paddingLeft: "31px",
                              }}
                            >
                              {/* {row.platform} */}
                              <img
                                className="service-provider--icon"
                                src={serviceProvider[row.platform]}
                                alt={row.platform}
                              />
                            </TableCell>
                            <TableCell>
                              <div
                                className="status"
                                style={{
                                  background:
                                    statusColorCodes[row.status].bgColor,
                                  color: statusColorCodes[row.status].textColor,
                                  height: "30px",
                                  width: "104px",
                                  textAlign: "center",
                                  lineHeight: "30px",
                                  borderRadius: "24px",
                                }}
                              >
                                {row.statusTxt}
                              </div>
                            </TableCell>
                            <TableCell>
                              <IconButton>
                                <EditOutlinedIcon
                                  styled={{ color: "#0F6EFF" }}
                                />
                              </IconButton>
                              <IconButton styled={{ color: "#0F6EFF" }}>
                                <DeleteOutlineOutlinedIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
                {/* <CardActions className="f-right">
            <Button variant="text" size="small" color="primary">
              View all Orders
            </Button>
          </CardActions> */}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CampaignContainer;
