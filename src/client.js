// Utilized to connect to the sanity client

import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "stcz81fx",
  dataset: "production",
});
