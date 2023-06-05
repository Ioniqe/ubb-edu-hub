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

const mockedAcquiredBadges = [
  {
    name: "marathoner.png",
    description: "EE macarenamacaren",
  },
  {
    name: "finish_1.png",
    description: "EE macarvdsvbhds vudsi vudhis v hcudis ena",
  },
  {
    name: "ee.png",
    description: "Hello",
  },
];

const Badges = () => {
  const imagesListRef = ref(storage, "/badges");
  const { theme } = useAppTheme();

  const [loading, setLoading] = useState(true);
  const [firebaseBadges, setFirebaseBadges] = useState<FirebaseImage[]>([]);
  const [acquiredBadges, setAcquiredBadges] = useState<Badge[]>([]);

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item: StorageReference) => {
        getDownloadURL(item).then((url) => {
          const newImage: FirebaseImage = {
            name: item.name,
            url,
          };

          setFirebaseBadges((prev: FirebaseImage[]) => [...prev, newImage]);
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

    return firebaseBadges.map((image: FirebaseImage) => {
      const acquiredBadge: Badge | undefined = acquiredBadges.find(
        (badge: Badge) => image.name === badge.name
      );

      if (!acquiredBadge) {
        return {
          ...image,
          description: "",
          url: image.url,
        };
      }

      return {
        ...acquiredBadge,
        url: image.url,
        acquired: true,
      };
    });
  }, [firebaseBadges, acquiredBadges, loading]);

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
              sx={{ overflow: "hidden" }}
            >
              <Box
                component={"img"}
                alt={badge.name}
                src={badge.url}
                width={"136px"}
                height={"136px"}
                sx={{
                  m: 2,
                  mb: 1,
                  opacity: badge.acquired ? 1 : 0.2,
                }}
              />

              <Tooltip title={badge.description} placement={"bottom"}>
                <Typography
                  variant={"h4"}
                  color={theme.palette.primary.main}
                  fontWeight={700}
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
