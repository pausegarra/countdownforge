import { Countdown } from '@/types';
import Link from 'next/link';

interface Props {
  countdown: Countdown;
}

export function CountdownCard({ countdown }: Props) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{countdown.name}</h2>
        <p>Target: {countdown.target.toLocaleString()}</p>
        <p>Public: {countdown.is_public ? 'Yes' : 'No'}</p>
        <div className="card-actions justify-end">
          <Link href={`/countdown/${countdown.id}`} className="btn">View</Link>
          <Link href={`/my-countdowns/${countdown.id}/edit`} className="btn btn-warning">Edit</Link>
          <button className="btn btn-error">Remove</button>
        </div>
      </div>
    </div>
  );
}