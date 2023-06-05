import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import {
  getDownloadURL,
  listAll,
  ref,
  StorageReference,
} from "firebase/storage";
import { storage } from "../firebase";
import { FirebaseImage } from "../types";

const Badges = () => {
  const [loading, setLoading] = useState(true);
  const imagesListRef = ref(storage, "/badges");
  const [imageUrls, setImageUrls] = useState<FirebaseImage[]>([]);

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item: StorageReference) => {
        getDownloadURL(item).then((url) => {
          const newImage: FirebaseImage = {
            name: item.name,
            url,
          };

          setImageUrls((prev: FirebaseImage[]) => [...prev, newImage]);
        });
      });
    });

    // TODO fetch from back
    setLoading(false);
  }, []);

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
          {imageUrls.map((image: FirebaseImage, index) => (
            <Box
              key={index}
              component={"img"}
              alt={image.name}
              src={image.url}
              width={"136px"}
              height={"136px"}
              sx={{
                m: 2,
              }}
            />
          ))}
        </Box>
      )}
    </CustomAppThemeProvider>
  );
};

export default Badges;
