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

const mockedAcquiredBadges = [
  {
    name: "Marathoner Marathoner Marathoner Marathoner Marathoner",
    filename: "marathoner.png",
    description: "EE macarenamacaren",
  },
  {
    name: "Hello",
    filename: "finish_1.png",
    description: "EE macarvdsvbhds vudsi vudhis v hcudis ena",
  },
  {
    name: "Helloeee",
    filename: "finish_1.png",
    description: "EE macarvdsvbhds vudsi vudhis v hcudis ena",
  },
  {
    name: "Hello There",
    filename: "finish_1.png",
    description: "EE macarvdsvbhds vudsi vudhis v hcudis ena",
  },
  {
    name: "Hello",
    filename: "finish_2.png",
    description: "EE macarvdsvbhds vudsi vudhis v hcudis ena",
  },
  {
    name: "ee Macarenaa",
    filename: "ee.png",
    description: "Hello",
  },
];

const Badges = () => {
  const imagesListRef = ref(storage, "/badges");
  const { theme } = useAppTheme();

  const [loading, setLoading] = useState(true);
  const [firebaseImages, setFirebaseImages] = useState<FirebaseImage[]>([]);
  const [acquiredBadges, setAcquiredBadges] = useState<Badge[]>([]);

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

    // TODO fetch from back
    setAcquiredBadges(mockedAcquiredBadges);
    setLoading(false);
  }, []);

  const badges: Badge[] = useMemo(() => {
    if (loading) {
      return [];
    }

    return acquiredBadges.map((badge: Badge) => {
      const foundImage: FirebaseImage | undefined = firebaseImages.find(
        (image: FirebaseImage) => image.name === badge.filename
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
                    WebkitLineClamp: "2",
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
    </CustomAppThemeProvider>
  );
};

export default Badges;
