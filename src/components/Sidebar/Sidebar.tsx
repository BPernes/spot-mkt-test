import * as React from 'react';
import { motion, useAnimationControls } from 'motion/react';
import Menu from '@/components/Menu';

const containerVariants = {
  close: {
    width: '5rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const arrowVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const containerControls = useAnimationControls();
  const arrowControls = useAnimationControls();

  React.useEffect(() => {
    if (isOpen) {
      containerControls.start('open');
      arrowControls.start('open');
    } else {
      containerControls.start('close');
      arrowControls.start('close');
    }
  }, [isOpen]);

  function handleOpenClose() {
    console.log('me chamara');
    setIsOpen(!isOpen);
  }

  return (
    <motion.nav
      initial="close"
      animate={containerControls}
      variants={containerVariants}
      className="flex flex-col z-10 gap-10 p-5 absolute top-0 left-0 h-screen shadow shadow-neutral-600 bg-white"
    >
      <section className="flex w-full justify-between place-items-center">
        <div className="logo-container w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full"></div>
        <button className="p-2 flex cursor-pointer" onClick={handleOpenClose}>
          <motion.svg
            variants={arrowVariants}
            animate={arrowControls}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-arrow-left w-8 h-8"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </motion.svg>
        </button>
      </section>

      <Menu />
    </motion.nav>
  );
}

export default Sidebar;
