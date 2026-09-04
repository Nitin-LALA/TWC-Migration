// Maps semantic image keys used across the site to real photography from
// thewellnessco.in wherever a suitable shot exists. A few keys with no real
// equivalent (blog covers, some category tiles) keep the earlier generated
// image; anything still missing falls back to a themed gradient via <Media>.
const WP = "https://www.thewellnessco.in/wp-content/uploads";

export const media = {
  "hero-home": `${WP}/2024/04/Embrace1-scaled.webp`,
  "hero-about": `${WP}/2024/04/Embrace4-scaled.webp`,

  "category-integrative-lifestyle": `${WP}/2024/03/1-800x800.webp`,
  "category-diagnostics": `${WP}/2024/03/Team-Section-Image-2-scaled.webp`,
  "category-recovery-performance": `${WP}/2024/03/4-800x800.webp`,
  "category-face-beauty": `${WP}/2024/03/6-800x800.webp`,
  "category-weight-slimming": "https://d8j0ntlcm91z4.cloudfront.net/user_39clzIufaaKWbJ1MHl5OLVHTAc3/hf_20260830_181606_1f7296dd-7d68-4803-a9c6-3d205b71f9e6.png",
  "category-mind-relaxation": "https://d8j0ntlcm91z4.cloudfront.net/user_39clzIufaaKWbJ1MHl5OLVHTAc3/hf_20260830_181606_62b1de73-955c-4db3-8e0a-ad77f7819ae3.png",

  "therapy-cryo": `${WP}/2024/04/Embrace3-scaled.webp`,
  "therapy-iv": `${WP}/2024/06/2-NEW-1-800x800.webp`,
  "therapy-hbot": `${WP}/2024/03/5-800x800.webp`,
  "therapy-redlight": `${WP}/2024/03/Team-Section-Image-1-scaled-e1709291970176.webp`,
  "therapy-hydrafacial": `${WP}/2024/03/6-800x800.webp`,

  "clinic-interior-reception": `${WP}/2024/04/DELHI-THUMBNAIL-scaled.webp`,
  "clinic-interior-treatment-room": `${WP}/2024/04/Embrace5-scaled-e1718800092739.webp`,

  "blog-cryo-contouring": "https://d8j0ntlcm91z4.cloudfront.net/user_39clzIufaaKWbJ1MHl5OLVHTAc3/hf_20260830_184706_ef50d937-e3c3-4ba9-ba02-b31744bce4cd.png",
  "blog-ems-workout": "https://d8j0ntlcm91z4.cloudfront.net/user_39clzIufaaKWbJ1MHl5OLVHTAc3/hf_20260830_184821_975d3e09-93d3-4dd2-a512-bf41b624f7ec.png",
  "blog-hbot-clarity": "https://d8j0ntlcm91z4.cloudfront.net/user_39clzIufaaKWbJ1MHl5OLVHTAc3/hf_20260830_184706_fad9a055-8b1a-44aa-8453-1c81911784fa.png",
};
