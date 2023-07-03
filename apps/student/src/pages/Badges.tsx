import React, { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import {
  getDownloadURL,
  listAll,
  ref,
  StorageReference,
} from "firebase/storage";
import { storage } from "../firebase";
import { Badge, FirebaseImage } from "../types";
import { useAppTheme } from "ui";
import unknownBadge from "../assets/images/unknown-badge.png";
import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";

const Badges = () => {
  const imagesListRef = ref(storage, "/badges");
  const { theme } = useAppTheme();

  const [loading, setLoading] = useState(true);
  const [firebaseImages, setFirebaseImages] = useState<FirebaseImage[]>([]);
  const [acquiredBadges, setAcquiredBadges] = useState<Badge[]>([]);

  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;

  const badgesQuery = useQuery(
    ["badges", firebaseId],
    () =>
      api<Badge[]>({
        url: "/badges",
        method: "GET",
        params: {
          firebaseId: firebaseId,
        },
      }),
    {
      select: (response) => response.data,
      onSuccess: (response) => setAcquiredBadges(response),
    }
  );

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item: StorageReference) => {
        getDownloadURL(item).then((url) => {
          const newImage: FirebaseImage = {
            name: item.name,
            url,
          };

          setFirebaseImages((prev: FirebaseImage[]) => [...prev, newImage]);
        });
      });
    });

    setLoading(false);
  }, []);

  const badges: Badge[] = useMemo(() => {
    if (loading) {
      return [];
    }

    return acquiredBadges.map((badge: Badge) => {
      const foundImage: FirebaseImage | undefined = firebaseImages.find(
        (image: FirebaseImage) => image.name === badge.iconName
      );

      if (!foundImage) {
        return badge;
      }

      return {
        ...badge,
        url: foundImage.url,
      };
    });
  }, [firebaseImages, acquiredBadges, loading]);

  return (
    <CustomAppThemeProvider>
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          borderRadius: "18px",
          backgroundColor: theme.palette.background.paper,
          p: 4,
          overflowY: "scroll",
        }}
      >
        {loading ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
            {badges.map((badge: Badge, index) => (
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"fit-content"}
                height={"fit-content"}
                maxWidth={"150px"}
                sx={{ overflow: "hidden", m: 3 }}
              >
                <Box
                  component={"img"}
                  alt={badge.name}
                  src={badge.url ?? unknownBadge}
                  width={"136px"}
                  height={"136px"}
                  sx={{
                    mb: 1,
                  }}
                />

                <Tooltip title={badge.name} placement={"top"}>
                  <Typography
                    variant={"h4"}
                    color={theme.palette.primary.main}
                    fontWeight={700}
                    sx={{
                      textAlign: "center",
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {badge.name}
                  </Typography>
                </Tooltip>

                <Tooltip title={badge.description} placement={"bottom"}>
                  <Typography
                    variant={"subtitle1"}
                    color={theme.palette.primary.main}
                    fontWeight={600}
                    mb={1}
                    sx={{
                      textAlign: "center",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {badge.description}
                  </Typography>
                </Tooltip>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Badges;
