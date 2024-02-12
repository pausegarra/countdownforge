'use client';

import { removeCountdown } from '@/actions/remove-countdown';

interface Props {
  id: string;
}

export function RemoveButton({ id }: Props) {
  return (
    <button onClick={async () => await removeCountdown(id)} className="btn btn-error">Remove</button>
  );
}