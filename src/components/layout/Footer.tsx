import Container from '@/components/ui/Container';
import SocialLinks from '@/components/ui/SocialLinks';
import { siteData } from '@/data/site';

export default function Footer() {
  return (
    <footer className='border-t border-border bg-surface py-8'>
      <Container>
        <div className='flex flex-col items-center justify-between gap-5 sm:flex-row'>
          <p className='text-center text-sm text-muted sm:text-left'>
            &copy; {siteData.name}. All rights reserved.
          </p>
          <SocialLinks links={siteData.social} variant='bare' />
        </div>
      </Container>
    </footer>
  );
}
