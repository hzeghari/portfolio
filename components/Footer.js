import { SOCIAL_PROFILES as socialProfiles } from '../constants/social';
import { SOCIAL_INFOS as socialInfos } from '../constants/infos';


function Footer() {
  const socialLinks = socialProfiles.map((profile) => {
    return (
      <a
        key={profile.name}
        href={profile.slug}
        target='_blank'
        rel='noreferrer'
        className='inline-block py-2 sm:py-1'
      >
        {profile.name}
      </a>
    );
  });

  // console.log("socialInfos.email", socialInfos.email);

  return (
    <footer className='sticky bottom-0 z-50 p-7 mt-auto font-mono text-xs leading-none uppercase tracking-[2px] md:text-[10px]'>
      <nav className='flex gap-8 sm:justify-between sm:gap-4'>
        <a
          href={`mailto:${socialInfos.email}`}
          target='_blank'
          rel='noreferrer'
          className='inline-block mr-auto py-2 sm:py-1 sm:hidden'
        >
          👋 {socialInfos.email}
        </a>
        {socialLinks}
      </nav>
    </footer>
  );
}

export default Footer;
