import { Countdown } from '@/types';

interface Props {
  countdown: Countdown;
}

export function CountdownCard({ countdown }: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{countdown.name}</h2>
        <p>Target: {countdown.target.toLocaleString()}</p>
        <p>Public: {countdown.is_public ? 'Yes' : 'No'}</p>
        <div className="card-actions justify-end">
          <button className="btn">View</button>
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-error">Remove</button>
        </div>
      </div>
    </div>
  );
}