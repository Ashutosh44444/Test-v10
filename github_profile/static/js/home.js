let currentVideoIndex = 0;
const videoContainer = document.querySelector('.video-container');
const videos = document.querySelectorAll('.back-video');
const totalVideos = videos.length;

function playCurrentVideo() {
  // Pause all videos first
  videos.forEach(video => video.pause());

  // Play the video that is currently in view
  videos[currentVideoIndex].play();
}

function slideVideos() {
  // Slide the container to the left by updating the transform property
  currentVideoIndex = (currentVideoIndex + 1) % totalVideos;
  videoContainer.style.transition = 'transform 1s ease-in-out';
  videoContainer.style.transform = `translateX(-${currentVideoIndex * 100}vw)`;

  // If it's the last video, reset the cycle after the transition
  if (currentVideoIndex === 0) {
    setTimeout(() => {
      // Temporarily disable transition to make the cycle seamless
      videoContainer.style.transition = 'none';
      videoContainer.style.transform = 'translateX(0)'; // Snap back to the first video

      // Wait a moment, then restore the transition for the next cycle
      setTimeout(() => {
        videoContainer.style.transition = 'transform 1s ease-in-out';
      }, 50);
    }, 1000); // Adjust this timing based on your transition duration
  }

  // Play the current video after sliding
  setTimeout(playCurrentVideo, 1000); // Slight delay for transition
}

// Automatically slide videos every 5 seconds
setInterval(slideVideos, 5000);

// Start by playing the first video
playCurrentVideo();
