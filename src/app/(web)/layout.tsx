import { NavBar } from '@/components/nav-bar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}