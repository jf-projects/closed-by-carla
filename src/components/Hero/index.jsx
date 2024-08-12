import './index.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init();
const Hero = () => {
    return <>
        <div
            id="hero-section"
            className="hero min-h-screen "
            style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg"
                    data-aos="zoom-out-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h1 className="mb-5 text-5xl font-bold text-heading" >Find Your Dream Home</h1>
                    <p className="mb-5">
                        Making Real Estate Dreams a Reality
                    </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
        <div className="divider"></div>
    </>
}

export default Hero;