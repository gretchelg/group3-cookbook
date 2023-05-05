import logo from '../images/logo.png'
export default function Errorpage() {
    return (
    <div className="errorpage">
        <img src={logo} width="10%" height="10%" alt="logo" className="imglogo" />
        <h1>Oops!</h1>
        <h1>Error 404</h1>
        <h1>Page not found</h1>
    </div>
    );
}