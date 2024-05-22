import { getImages } from '@/lib/getImages';
import Image from 'next/image';

export default async function SelectProfile() {
  const images: string[] = await getImages();
  return (
    <>
      <h1>Qui est-ce ?</h1>
      <ul className="choose-profil">
        {images &&
          images.map((src: string, index: number) => (
            <li className="profile" key={`profil ${index}`}>
              <div>
                <a className="profile-link">
                  <div className="relative rounded max-w-[200px] max-h-[200px] min-h-[84px] min-w-[84px] w-[10vw] h-[10vw] overflow-hidden">
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
    </>
  );
}
