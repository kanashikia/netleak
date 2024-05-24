import SelectProfile from '@/components/browse/SelectProfile/SelectProfile';
import { useEffect, useState } from 'react';

export const Browse: React.FC = () => {
  const [profilExist, setProfilExist] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('profilId')) setProfilExist(true);
  }, []);

  if (!profilExist) return <SelectProfile />;
  return (
    <main className="">
      <SelectProfile />
    </main>
  );
};

export default Browse;
