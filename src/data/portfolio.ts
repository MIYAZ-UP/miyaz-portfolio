export const profile = {
 name: "MIYAZ U P",
 firstName: "MIYAZ",
 lastName: "U P",
 alias: "MIYAZ-UP",
 role: "Flutter App Developer",
 specialty: "Apps & Websites",
 company: "MZ LOOP",
 companyUrl: "https://play.google.com/store/apps/developer?id=MZ+LOOP",
 timezone: "Asia/Kolkata",
 tagline: "Flutter app developer building apps and websites that make a difference. Explore my published Android apps under MZ LOOP.",
 bio: [
  "I'm Miyaz U P, a first-year Electronics and Communication (EC) student at Cochin University of Science and Technology (CUSAT), a Flutter app developer and a tech enthusiast. I build apps and websites that make a difference.",
  "I publish Android apps under MZ LOOP, with projects spanning education and audio. Explore my apps on Google Play and follow my development journey on GitHub.",
  "Beyond building software, I'm exploring AI and interested in volunteering — always curious about how technology can help people.",
 ],
 social: {
  github: "https://github.com/MIYAZ-UP",
  linkedin: "https://www.linkedin.com/in/miyaz-u-p-048a9643a/",
  x: "https://x.com/miyaz_m_z",
  instagram: "https://www.instagram.com/_miyazz_z/",
  playstore: "https://play.google.com/store/apps/developer?id=MZ+LOOP",
 },
 avatar: "/miyaz.webp",
 ogImage: "/miyaz.webp",
};

export const socialLinks = [
 { label: "GitHub", url: profile.social.github },
 { label: "LinkedIn", url: profile.social.linkedin },
 { label: "X", url: profile.social.x },
 { label: "Instagram", url: profile.social.instagram },
 { label: "Google Play", url: profile.social.playstore },
];

export const experiences = [
 {
  role: "Flutter App Development",
  company: "MZ LOOP",
  tech: ["Flutter", "Android", "Google Play"],
  description: "Building mobile apps and publishing them on Google Play under MZ LOOP, from learning resources to everyday audio experiences.",
 },
 {
  role: "Websites & Exploration",
  company: "MIYAZ-UP",
  tech: ["Web Development", "AI", "Volunteering"],
  description: "Developed the Cashew Co and Mouzy websites. Alongside web development, I explore AI and ways to put technology to useful work.",
 },
];

export interface Project {
 name: string;
 desc: string;
 tech: string[];
 url: string;
 status: "live" | "open source";
 platform: "Google Play" | "Website" | "GitHub";
}

export const projects: Project[] = [
 {
  name: "MIFY",
  desc: "Music, radio, podcasts and audiobooks in one Android app.",
  tech: ["Android", "Music & Audio"],
  url: "https://play.google.com/store/apps/details?id=com.music.mify",
  status: "live",
  platform: "Google Play",
 },
 {
  name: "MIFLIX",
  desc: "A movie, TV, and anime discovery app with an Android APK download.",
  tech: ["Android", "Movies", "TV", "Anime"],
  url: "https://github.com/MIYAZ-UP/MIFLIX",
  status: "open source",
  platform: "GitHub",
 },
 {
  name: "Mouzy",
  desc: "A brand website for Mouzy, showcasing its Avil Milk offerings and story.",
  tech: ["Web Development", "Brand Website"],
  url: "https://mouzy-iota.vercel.app/",
  status: "live",
  platform: "Website",
 },
 {
  name: "Cashew Co",
  desc: "A website I developed for Cashew Co. Explore the live project online.",
  tech: ["Web Development", "Website"],
  url: "https://cashew-co.vercel.app/",
  status: "live",
  platform: "Website",
 },
 {
  name: "PaddyGuard AI",
  desc: "A Dart-based paddy disease detection system.",
  tech: ["Dart", "AI", "Agriculture"],
  url: "https://github.com/MIYAZ-UP/PaddyGuard-AI-Paddy-Disease-Detection-System",
  status: "open source",
  platform: "GitHub",
 },
 {
  name: "NEET BRILLIANT Classes",
  desc: "Free NEET repeater resources with Biology, Chemistry and Physics video classes and notes.",
  tech: ["Android", "Education", "NEET"],
  url: "https://play.google.com/store/apps/details?id=com.brilliantpala.neetfreeclasses",
  status: "live",
  platform: "Google Play",
 },
 {
  name: "EDU REPEATER JEE",
  desc: "Chemistry and Physics video classes, notes and study resources for JEE repeaters.",
  tech: ["Android", "Education", "JEE"],
  url: "https://play.google.com/store/apps/details?id=com.learn.edurepeaterjee",
  status: "live",
  platform: "Google Play",
 },
];

export const skills = ["Flutter", "App Development", "Android", "Web Development", "Google Play", "AI Exploration"];
export const stats = [
 { value: 3, suffix: "", label: "published apps" },
 { value: 2, suffix: "", label: "websites developed" },
 { value: 5, suffix: "", label: "featured projects" },
 { value: 5, suffix: "", label: "ways to connect" },
];
