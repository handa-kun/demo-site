import loader from "../../../images/loader.gif";

const Preloader = (props) => {
    return <div>
        <img src={loader} alt='logo' style={{ width: 'max-content', margin: '200px' }} />
    </div>
};

export default Preloader;