'use client';

import { useRouter } from 'next/navigation';
import { useFormStatus } from 'react-dom';

interface Props {
  label: string;
}

export function SubmitButton({ label }: Props) {
  const { pending } = useFormStatus();
  const router = useRouter();

  return (
    <div className='flex gap-3 justify-center'>
      <button type="button" onClick={() => router.push('/my-countdowns')} disabled={pending} className='btn btn-error disabled:opacity-50'>Cancel</button>
      <button type='submit' disabled={pending} className='btn btn-primary disabled:opacity-50'>{label}</button>
    </div>
  );
}