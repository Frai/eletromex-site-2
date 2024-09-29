import clsx from 'clsx';
import eletromexLogo from '../assets/eletromex-logo.png';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black pt-2',
        {
          'h-[70px] w-[100px] rounded-xl': !size,
          'h-[40px] w-[60px] rounded-lg': size === 'sm'
        }
      )}
    >
      <img src={eletromexLogo.src} alt="Eletromex" className="invert" />
    </div>
  );
}
