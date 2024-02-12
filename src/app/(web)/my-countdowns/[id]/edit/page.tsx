import { EditCountdownForm } from '@/components/edit-countdown-form';
import { getSession } from '@/helpers/get-session';
import exec from '@/lib/database';
import { Countdown } from '@/types';

interface Props {
  params: {
    id: string;
  };
}

export default async function({ params }: Props) {
  const session = await getSession();
  const countdowns = await exec<Countdown[]>({ query: 'select * from countdowns where user_id = ? and id = ? order by created_at desc', values: [(session?.user as any).id, params.id] });
  const [countdown] = countdowns;

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-4xl">Edit countdown</h1>
      <EditCountdownForm countdown={{ ...countdown }} />
    </div>
  );
}