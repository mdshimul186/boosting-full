import React from 'react'
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../common/ActiveLink'
import * as Icon from 'react-feather';

class DefaultStyleTwo extends React.Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render(){
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { pathname } = this.props.router;
        let layOutCls = '';
        if (pathname == '/home-three'){
            layOutCls = 'p-relative';
        }
        return (
            <header id="header" className="navbar-style-three">
                <div id="navbar" className={`startp-nav ${layOutCls}`}>
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a 
                                    className="navbar-brand"
                                    onClick={() => window.location.refresh()}
                                >
                                    <img src={require("../../static/images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
    
                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item">
                                        <a 
                                            onClick={e => e.preventDefault()} 
                                            href="#" 
                                            className="nav-link"
                                        >
                                            Home <Icon.ChevronDown />
                                        </a>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home One <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link 
                                                            href="/?style=default"
                                                        >
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="nav-item">
                                                        <Link href="/?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home Two <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link href="/home-two?style=default">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-two?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-two?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-two?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home Three <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link href="/home-three?style=default">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-three?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-three?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-three?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home Four <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link href="/home-four?style=default">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-four?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-four?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-four?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home Five <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link href="/home-five?style=default">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-five?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-five?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-five?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home Six <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link href="/home-six?style=default">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-six?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-six?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-six?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home Seven <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link href="/home-seven?style=default">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-seven?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-seven?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-seven?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a 
                                                        className="nav-link"
                                                        onClick={e => e.preventDefault()}
                                                    >
                                                        Home Eight <Icon.ChevronRight />
                                                    </a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link href="/home-eight?style=default">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Light Green
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-eight?style=brink-pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Brink Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-eight?style=pink">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Pink
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/home-eight?style=purple">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={() => window.location.refresh()}
                                                            >
                                                                Purple
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li> 
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="#">
                                            <a href="#" className="nav-link">Pages <Icon.ChevronDown /></a>
                                        </Link>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/features">
                                                    <a className="nav-link">Features</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a className="nav-link">Services</a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/services">
                                                            <a className="nav-link">Services</a>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/service-details">
                                                            <a className="nav-link">Service Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="#">
                                                    <a className="nav-link">Project</a>
                                                </Link>
                                                <ul className="dropdown_menu">
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/project">
                                                            <a className="nav-link">Project</a>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="nav-item">
                                                        <Link activeClassName="active" href="/project-details">
                                                            <a className="nav-link">Project Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
    
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/team">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li>
    
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/pricing">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/faq">
                                                    <a className="nav-link">FAQ</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    activeClassName="active" 
                                                    href="/coming-soon"
                                                >
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    activeClassName="active" 
                                                    href="/error"
                                                >
                                                    <a className="nav-link">Error Status</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Shop <Icon.ChevronDown /></a>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/products">
                                                    <a className="nav-link">Products</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/product-details">
                                                    <a className="nav-link">Products Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="#">
                                            <a className="nav-link">Blog <Icon.ChevronDown /></a>
                                        </Link>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog">
                                                    <a className="nav-link">Blog</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item cart-wrapper">
                                        <Link href="/cart">
                                            <a className="nav-link">
                                                <Icon.ShoppingCart />
                                                <span>{products.length}</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
    
                            <div className="others-option">
                                <Link href="#">
                                    <a className="btn btn-light">Support</a>
                                </Link>
                                <Link href="#">
                                    <a className="btn btn-primary">Login</a>
                                </Link>
                            </div>
                        </nav>
                    </div> 
                </div>
    
            </header>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(DefaultStyleTwo))