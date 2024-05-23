import { getImages } from '@/lib/getImages';
import Image from 'next/image';

export default function SelectProfile() {
  const images: string[] = getImages();
  return (
    <div className="text-center">
      <div className="flex flex-col">
        <div className="block maw-w-[80%]">
          <h1>Qui est-ce ?</h1>
          <ul className="my-[2vh] flex flex-wrap">
            {images &&
              images.map((src: string, index: number) => (
                <li
                  className="block mr-[2vw]"
                  key={`profil ${index}`}
                >
                  <div className="">
                    <a className="w-fit">
                      <div
                        className="box-border border border-transparent relative rounded max-w-[200px] max-h-[200px] min-h-[84px] min-w-[84px] w-[10vw] h-[10vw] overflow-hidden
                      hover:border hover:border-white"
                      >
                        <Image
                          src={src}
                          alt={`Profil ${index}`}
                          fill={true}
                          priority={index === 0} // Priorite pour charger la premiere image, mode lazy par defaut
                        />
                      </div>
                      <span className="profile-name">Name</span>
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <a className="border border-white">Gérer les profils</a>
      </div>
    </div>
  );
}
