const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='text-center color-gray-400 py-2 font-md'>
      Brendellya.com &copy; {year}. All Rights Reserved.
    </footer>
  );
};

export default Footer;
