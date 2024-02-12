'use client';

import { useFormState } from 'react-dom';
import { SubmitButton } from './submit-button';
import { createCountdownAction } from '@/actions/create-countodnw';
import { CountdownForm } from './countdown-form';

const initialState: Record<string, any> = {
  message: '',
  errors: {}
};

export function CreateCountdownForm() {
  const [state, action] = useFormState(createCountdownAction, initialState);

  return (
    <form action={action}>
      <CountdownForm state={state} />
      <SubmitButton label='Create Countdown' />
    </form>
  );
}