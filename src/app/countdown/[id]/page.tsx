import { ShowCountdown } from '@/components/show-countdown';
import exec from '@/lib/database';
import { Countdown } from '@/types';

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const results = await exec<Countdown[]>({ query: 'select * from countdowns where id = ?', values: [params.id] });
  const countdown = results[0];

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{countdown.name}</h1>
          <div className="py-6">
            <ShowCountdown countdown={{ ...countdown }} />
          </div>
        </div>
      </div>
    </div>
  );
}