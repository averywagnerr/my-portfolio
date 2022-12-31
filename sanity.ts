import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = "2022-12-30" // process.env.NEXT_PUBLIC_SANITY_API_VERSION // note: not recommended to use dynamic date, as updates could unexpectedly break your build

export const config = ({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  // useCdn: typeof document !== 'undefined', 
  useCdn: process.env.NODE_ENV === 'production',
  // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
})

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
