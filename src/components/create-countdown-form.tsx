'use client';

import { useFormState } from 'react-dom';
import { SubmitButton } from './submit-button';
import { TextInput } from './text-input';
import { ToggleInput } from './toggle-input';
import { createCountdownAction } from '@/actions/create-countodnw';

const initialState: Record<string, any> = {
  message: '',
  errors: {}
};

export function CreateCountdownForm() {
  const [state, action] = useFormState(createCountdownAction, initialState);

  console.log(state);

  return (
    <form action={action}>
      <TextInput error={state?.errors?.name?.[0]} name="name" label='Name' placeholder='Your countdown name' />
      <TextInput error={state?.errors?.target?.[0]} name="target" type='datetime-local' label='Target date' />
      <ToggleInput name="is_public" label="Public?" error={state?.errors?.target?.[0]} />
      <SubmitButton label='Create Countdown' />
    </form>
  );
}