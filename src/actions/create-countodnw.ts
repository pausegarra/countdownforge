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

export async function createCountdownAction(prevState: any, formData: FormData) {
  const validated = schema.safeParse({
    name: formData.get('name'),
    target: formData.get('target'),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors
    };
  }

  const session = await getSession()

  await exec({
    query: "insert into countdowns (id, name, is_public, user_id) values (?,?,?,?)",
    values: [v4(), validated.data.name, formData.get('is_public') === 'on', (session?.user as any).id]
  });

  revalidatePath('/my-countdowns');
  redirect('/my-countdowns');

  return {};
}