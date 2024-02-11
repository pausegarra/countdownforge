import Link from 'next/link';

export default function Page() {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-between">
        <h1 className='text-4xl'>My Countdowns</h1>
        <Link href="/my-countdowns/add" className='btn btn-primary'><span className='text-2xl font-bold'>+</span> Add Countdown</Link>
      </div>
    </div>
  );
}