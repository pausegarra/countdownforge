'use client';

import { Countdown } from '@/types';
import { CountdownForm } from './countdown-form';
import { SubmitButton } from './submit-button';
import { useFormState } from 'react-dom';
import { editCountdownAction } from '@/actions/edit-countodnw';

interface Props {
  countdown: Countdown;
}

const initialState: Record<string, any> = {
  message: '',
  errors: {}
};

export function EditCountdownForm({ countdown }: Props) {
  const [state, action] = useFormState(editCountdownAction, initialState);

  return (
    <form action={action}>
      <input type="hidden" name="countdown_id" value={countdown.id} />
      <CountdownForm state={state} values={countdown} />
      <SubmitButton label='Edit countdown' />
    </form>
  );
}