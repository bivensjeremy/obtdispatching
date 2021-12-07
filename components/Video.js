const video = () => {
    return (
        <div>
            <video playsInline autoPlay loop muted id="timelapseVideo" poster="/images/timelapseStillImage.png">
                <source src="/videos/timelapseCity.webm" type="video/webm" />
          </video>
        </div>
    );
}

export default video;