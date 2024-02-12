'use server';

import exec from '@/lib/database';
import { revalidatePath } from 'next/cache';

export async function removeCountdown(id: string) {
  await exec({
    query: 'delete from countdowns where id = ?',
    values: [id]
  });

  revalidatePath('/my-countdowns');
}