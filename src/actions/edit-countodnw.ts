'use server';

import exec from '@/lib/database';
import { z } from 'zod';
import { v4 } from 'uuid';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getSession } from '@/helpers/get-session';

const schema = z.object({
  name: z.string({
    invalid_type_error: 'The name is invalid'
  }).min(1, 'The name is required'),
  target: z.string({
    required_error: 'The target date is required',
    invalid_type_error: 'The target date is invalid'
  }).min(1, 'The date is required')
});

export async function editCountdownAction(prevState: any, formData: FormData) {
  const validated = schema.safeParse({
    name: formData.get('name'),
    target: formData.get('target'),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors
    };
  }

  await exec({
    query: "update countdowns set name=?, target=?, is_public=? where id=?",
    values: [validated.data.name, validated.data.target, formData.get('is_public') === 'on', formData.get('countdown_id')]
  });

  revalidatePath('/my-countdowns');
  revalidatePath(`/my-countdowns/${formData.get('id')}/edit`);

  redirect('/my-countdowns');

  return {};
}