import './index.scss'

const FooterMenu = () => {
    return <>
        <div className='menu-containerx z-50'>
            <ul className="menu menu-horizontal bg-base-200 rounded-box">
                <li>
                    <a href='#hero-section'>
                        <svg width={22} height={22} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <path d="M9 22V12h6v10" />
                        </svg>
                    </a>
                </li>

                <li>
                    <a href='#brokerage-section'>
                        <svg width={22} height={22} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                            <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='#property-section'>
                        <svg width={22} height={22} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
                            <path d="M8 2v16" />
                            <path d="M16 6v16" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='#contact-section'>
                        <svg width={22} height={22} fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

    </>
}

export default FooterMenu;