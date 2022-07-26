import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import Toolbar from "@mui/material/Toolbar";
import twitterLogo from "../Images/twitterIcon.png";

export default function Footer() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#27272A",
          display: "flex",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "3%",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,

              color: "text.secondary",
              "& svg": {
                m: 1.5,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Link
                href="/"
                underline="hover"
                sx={{ top: "auto", bottom: 0, color: "white" }}
              >
                Anasayfa
              </Link>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: "white" }}
              />
              <Link
                href="/UserAgreement"
                underline="hover"
                sx={{ top: "auto", bottom: 0, color: "white" }}
              >
                Kullanıcı Sözleşmesi
              </Link>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: "white", ml: 2 }}
              />
              <Link
                href="privacyAgreement"
                underline="hover"
                sx={{ top: "auto", bottom: 0, color: "white" }}
              >
                Gizlilik Sözleşmesi
              </Link>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", ml: 5 }}>
              <a href="https://www.facebook.com/bulutmdyazilim">
                <FacebookTwoToneIcon sx={{ color: "white", fontSize: 30 }} />
              </a>

              <Box
                sx={{
                  alignSelf: "center",
                }}
              >
                <a href="https://twitter.com/bulut_mdyazilim">
                  <Box
                    component="img"
                    src={twitterLogo}
                    sx={{
                      width: 30,
                      height: 30,
                      alignSelf: "center",
                    }}
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
