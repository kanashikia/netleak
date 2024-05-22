import SelectProfile from '@/components/browse/SelectProfile';
import { getImages } from '@/lib/getImages';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default async function BrowsePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SelectProfile />
    </main>
  );
}
