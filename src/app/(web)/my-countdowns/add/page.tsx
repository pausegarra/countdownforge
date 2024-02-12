import { CreateCountdownForm } from '@/components/create-countdown-form';

export default function Page() {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-4xl">Add new countdown</h1>

      <CreateCountdownForm />
    </div>
  );
}