import { AuthOptions } from '@/config/auth-options';
import { getServerSession } from 'next-auth';

export function getSession() {
  return getServerSession(AuthOptions);
}