function Footer() {
    return (
        <div
            className="footer d__flex align__items__center justify__content__space__between pz-10"
            style={{ padding: "10px 20px", zIndex: "100" }}
        >
            <span
                className="copyright"
                style={{ color: "black", fontSize: "14px", opacity: "0.75", right: 0, position: 'absolute' }}
            >
                Copyright © 2021 | <a href="https://remychazelas.com/"
                    target="_blank"
                    rel="noreferrer">Remy CHAZELAS</a> | All Rights Reserved.
            </span>
        </div>
    );
}

export default Footer;