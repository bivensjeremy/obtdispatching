import Script from "next/script"

const Footer = () => {
    return (
        <div>
            <footer className="footer py-4 background">
                <div className="text-muted text-center fs-5">Copyright &copy; 2021 OB&T Dispatching Service, LLC</div>
                <div className="text-muted text-center">Designed by <a href="http://www.bivensblueprint.com" className="text-decoration-none">Bivens Blueprint, LLC</a></div>
            </footer>

        {/* Bootstrap Javascript */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
        </div>
    );
}

export default Footer;