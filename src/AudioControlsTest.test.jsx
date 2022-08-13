import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";

test.todo("tracks.js"); {
  expect(tracks.length).toBe(3);
  expect(tracks[0].title).toBe("I Won't");
  expect(tracks[0].artist).toBe("AJR");
  expect(tracks[1].title).toBe("World's smallest Violin");
}

test.todo("AudioPlayer"); {
  const { title, artist, color, image, audioSrc } = tracks[0];
  expect(title).toBe("I Won't");
  expect(artist).toBe("AJR");
  expect(color).toBe("#00aeb0");
}

test.todo("AudioPlayer.jsx"); {
  const { title, artist, color, image, audioSrc } = tracks[0];
  const { duration } = new Audio(audioSrc);
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;
}

test.todo("AudioControls.jsx"); {
  const { title, artist, color, image, audioSrc } = tracks[0];
  const { duration } = new Audio(audioSrc);
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;
}