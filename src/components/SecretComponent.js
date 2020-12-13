

const SecretComponent = () => {
    return(
        <div className="eye">
            <img src={`${process.env.PUBLIC_URL}/siteImages/eyeBall.png`} alt="secret eye"/>
        </div>
    )
}

export default SecretComponent;