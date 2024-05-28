import { getImages } from '@/lib/getImages';
import Image from 'next/image';
import './select-profile.scss';

export default function SelectProfile() {
  const images: string[] = getImages();
  return (
    <div className="text-center">
      <div className="flex flex-col">
        <div className="list-profile">
          <h1>Qui est-ce ?</h1>
          <ul className="choose-profile">
            {images &&
              images.map((src: string, index: number) => (
                <li className="profile" key={`profil ${index}`}>
                  <div className="">
                    <a className="profile-link">
                      <div className="avatar-wrapper">
                        {/* <Image
                          src={src}
                          alt={`Profil ${index}`}
                          className="profile-icon"
                          fill={true}
                          priority={index === 0} // Priorite pour charger la premiere image, mode lazy par defaut
                        /> */}
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
