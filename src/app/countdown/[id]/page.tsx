import { ShowCountdown } from '@/components/show-countdown';
import { getSession } from '@/helpers/get-session';
import exec from '@/lib/database';
import { Countdown } from '@/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const session = await getSession();
  const results = await exec<Countdown[]>({ query: 'select * from countdowns where id = ?', values: [params.id] });
  const countdown = results[0];

  if (!countdown.is_public && (session?.user as any)?.id !== countdown.user_id) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-base-200">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          <h1 className="text-5xl font-bold">{countdown.name}</h1>
          <div className="py-6">
            <ShowCountdown countdown={{ ...countdown }} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-10 right-10 px-4 sm:px-6 lg:px-8'>
        powered by <Link href="/" className='text-primary'>CountdownForge</Link>
      </div>
    </div>
  );
}
