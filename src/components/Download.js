import React from 'react';

const DownloadApp = () => {
  return (
    <div className="flex justify-center items-center space-x-12 my-12">
      {/* App Store Image */}
      <a
        href="https://apps.apple.com/in/app/rachit-finserv/id1323948069"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" // Correct direct URL for App Store badge
          alt="Download on the App Store"
          className="h-16 md:h-20" // Adjust size as needed
        />
      </a>

      {/* Play Store Image */}
      <a
        href="https://play.google.com/store/apps/details?id=com.tvs.rachit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" // Correct direct URL for Play Store badge
          alt="Get it on Google Play"
          className="h-16 md:h-20" // Adjust size as needed
        />
      </a>
    </div>
  );
};

export default DownloadApp;
