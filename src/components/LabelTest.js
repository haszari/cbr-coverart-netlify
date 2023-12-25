
import ArtistTitleLabel from 'components/ArtistTitleLabel';

import "styles/whole-earth.scss";
import "styles/label-test.scss";

function randomWord({length}) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";
  let word = "";
  for (let i = 0; i < length; i++) {
    word += consonants.charAt(Math.floor(Math.random() * consonants.length));
    word += vowels.charAt(Math.floor(Math.random() * vowels.length));
  }
  return word;
}

function randomTitle({words = 2}) {
  let title = "";
  while (words > 0) {
    title += randomWord({length: Math.random() * 3 + 1}) + " ";
    words--;
  }
  return title.trim();
}

export default function LabelTest() {
  const testCount = 10;
  const covers = [];
  for (let i = 0; i < testCount; i++) {
    const position = {
      top: Math.random() * 100,
    };
    if (i % 2 === 0) {
      position.left = 0;
    }
    else {
      position.right = 0;
    }

    covers.push( {
      artist: randomTitle(Math.random() * 2 + 1),
      title: randomTitle(Math.random() * 6 + 1),
      length: Math.random() * 50 + 20,
      position
    });
  }
  // initialise an array with 10 elements

  // return (<p>BING</p>);
  return covers.map((item, i) => (
    <div key={i} className="cover">
      <div className="artwork">
        <ArtistTitleLabel
          {...item}
        />
      </div>
    </div>
  ))
};
