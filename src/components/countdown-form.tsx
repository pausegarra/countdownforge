import React from 'react';
import { TextInput } from './text-input';
import { ToggleInput } from './toggle-input';
import { Countdown } from '@/types';

interface Props {
  state: Record<string, any>;
  values?: Countdown;
}

function formatDateToDateTimeLocal(date: Date) {
  if (!date) return '';

  const pad = (number: number) => (number < 10 ? `0${number}` : number);

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function CountdownForm({ state, values }: Props) {
  const formattedDate = values && values.target ? formatDateToDateTimeLocal(values.target) : '';

  return (
    <React.Fragment>
      <TextInput error={state?.errors?.name?.[0]} name="name" label='Name' placeholder='Your countdown name' value={values?.name} />
      <TextInput error={state?.errors?.target?.[0]} name="target" type='datetime-local' label='Target date' value={formattedDate} />
      {values?.target.toLocaleString()}
      <ToggleInput name="is_public" label="Public?" error={state?.errors?.target?.[0]} checked={values?.is_public} />
    </React.Fragment>
  );
}