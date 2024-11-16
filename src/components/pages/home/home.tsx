import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  const links = [
    {
      name: 'Image lazy loading',
      href: '/lazy-image',
    },
  ];

  const linkElements = links.map((link) => (
    <Button asChild variant="outline" className="my-4 w-full" key={link.href}>
      <Link to={link.href}>{link.name}</Link>
    </Button>
  ));

  return (
    <div className="flex min-h-screen justify-center mt-6">
      <div className="flex flex-col w-96">{linkElements}</div>
    </div>
  );
}
