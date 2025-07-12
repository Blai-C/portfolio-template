const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <>
            <p className="text-center text-primary-600 mt-4">
                &copy; {currentYear} John Doe. All rights reserved.
            </p>
        </>
    );
};

export default Footer;
