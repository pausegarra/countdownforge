import { CountdownCard } from '@/components/countdown-card';
import { getSession } from '@/helpers/get-session';
import exec from '@/lib/database';
import { Countdown } from '@/types';
import Link from 'next/link';

export default async function Page() {
  const session = await getSession();
  const countdowns = await exec<Countdown[]>({ query: 'select * from countdowns where user_id = ? order by created_at desc', values: [(session?.user as any).id] })

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-between">
        <h1 className='text-4xl'>My Countdowns</h1>
        <Link href="/my-countdowns/add" className='btn btn-primary'><span className='text-2xl font-bold'>+</span> Add Countdown</Link>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-5">
        {countdowns?.map((countdown) => <CountdownCard countdown={countdown} />)}
      </div>
    </div>
  );
}