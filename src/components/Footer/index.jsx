// import { useProperties } from '../Context/PropertyContext/PropertyContext';


const Footer = () => {
    // const { properties } = useProperties();
    // const companyDetails = new Map();

    // properties.forEach(property => {
    //     if (!companyDetails.has(property.company)) {
    //         companyDetails.set(property.company, {
    //             name: property.name,
    //             website: property.website,
    //             company: property.company
    //         });
    //     }
    // });

    // const uniqueCompanies = Array.from(companyDetails.values());

    return <footer className="footer bg-base-300 text-base-content p-16">
        {/* <nav>
            <h6 className="footer-title">Services</h6>
            <a href='!#' className="link link-hover">Site Viewing</a>
        </nav>
        <nav>
            <h6 className="footer-title">Companies</h6>
            <a className="link link-hover" href='https://mapilesrealty.com/' target='_blank' rel="noreferrer"  >Mapiles Realty</a>
            {uniqueCompanies.map((property, index) => (
                <a className="link link-hover" href={property.website} target='_blank' rel="noreferrer" key={index} >{property.company}</a>
            ))}
        </nav> */}
        {/* <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
                <a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                </a>
            </div>
        </nav> */}
    </footer>
}


export default Footer;