import Head from "next/head"

const mail = <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
<path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
<path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
</svg>

const messagesent = () => {
    return (
        <div className="background vh-100">
            <Head>
            <title>OB&T | Contact Us</title>
            </Head>

            <div className="container text-center">
                <h1 className="display-4 py-3">Message Sent!</h1>
                { mail }
                <h2 className="fw-bold text-secondary p-3 border">Thank you for your message. <br /> We will follow up with you shortly.</h2>
            </div>
        </div>
    );
}

export default messagesent;