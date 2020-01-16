module.exports = {
  // App Info
  appstore_link         : "https://imedadel.me",                                  // Enter App Store URL.
  playstore_link        : "",                                  // Enter Google Play Store URL.
  google_analytics_ID   : "",                                        // Enter Google Analytics ID or ""
  presskit_download_link: "",                                  // Enter a link to downloadable file or (e.g. public Dropbox link to a .zip file). 
  video_or_screenshot   : "screenshot",                                           // "screenshot" or "video"
  app_url               : "https://agalp.imedadel.me",                            // Domain of your website without path_prefix.
  path_prefix           : "/",                                                    // Prefixes all links. For cases when deployed to example.github.io/automatic-gatsbyjs-app-landing-page/.
  app_name              : "拾字 - 拍照取字",
  app_price             : "免费",
  app_description       : "支持离线模式的图片转文字工具",
  app_keywords          : ["automatic", "拾字", "app", "landing page"],

  // Personal Info
  your_name              : "solos",
  your_link              : "https://solos.im",
  your_city              : "Shanghai",
  email_address          : "solos.im",
  linkedin_username      : null,
  facebook_username      : null,
  instagram_username     : "",
  twitter_username       : "jht360",
  github_username        : "solos",
  youtube_username       : null,

  // Features List
  features               : [
    {
      title: "支持图片裁剪",
      description: "可以截取部分图片进行识别",
      fontawesome_icon_name: "magic",
    },
    {
      title: "支持离线模式",
      description:
        "没有网络也可以进行简单识别",
      fontawesome_icon_name: "mobile",
    },
    {
      title: "识别速度快",
      description:
        "识别速度飞快",
      fontawesome_icon_name: "sync",
    },
  ],
  header_background             : "rgba(0, 0, 0, 0.1)",
  topbar_title_color            : "#ffffff",
  cover_overlay_color_rgba      : "rgba(54, 59, 61, 0.8)",
  device_color                  : "black",                          // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color         : "ffffff",
  primary_text_color            : "#000",
  content_width                 : "1170px",
  font                          : `"Helvetica Neue", sans-serif`,
  link_color                    : "#1d63ea",
  app_title_color               : "#ffffff",
  app_price_color               : "#ffffff",
  app_description_color         : "#ffffff",
  feature_title_color           : "#000000",
  feature_text_color            : "#666666",
  feature_icons_foreground_color: "#1d63ea",
  feature_icons_background_color: "#e6e6e6",
  social_icons_foreground_color : "#666666",
  social_icons_background_color : "#e6e6e6",
  footer_text_color             : "#666666",
}
