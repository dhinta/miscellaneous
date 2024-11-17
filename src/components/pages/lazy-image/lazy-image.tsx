import { useEffect, useRef } from 'react';

export function LazyImage() {
  const ref = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    ref.current.forEach((div) => {
      (function (div) {
        const img = div.querySelector('img')!;
        img.addEventListener('load', () => {
          if (img.complete) {
            loaded(div, img);
          } else {
            img.addEventListener('load', () => loaded(div, img));
            img.addEventListener('error', function () {
              console.error('error');
            });
          }
          function loaded(div: HTMLDivElement, img: HTMLImageElement) {
            div.classList.remove('animate-pulse');
            img.classList.remove('invisible');
            console.log('loaded');
          }
        });
      })(div);
    });
  }, []);

  const renderImage = () => {
    const imagesList = Array.from({ length: 34 }, (_, index) => ({ name: `${index + 1}.jpg`, loaded: false }));
    return imagesList.map((image) => (
      <div
        className="w-[calc(50%-1rem)] h-96 mx-2 my-1 bg-cover bg-no-repeat relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full animate-pulse"
        key={image.name}
        style={{ backgroundImage: `url(./images/thumbs/${image.name})` }}
        ref={(el) => el && ref.current.push(el)}
      >
        <img src={`images/${image.name}`} alt="Image" className="w-full h-full invisible" loading="lazy" />
      </div>
    ));
  };
  return <div className="flex mt-6 w-3/4 px-48 flex-wrap">{renderImage()}</div>;
}
