import { getSession } from '@/helpers/get-session';

export default async function MyCountdowns() {
  const session = await getSession();

  return (
    <p>{(session?.user as any).id}</p>
  );
}