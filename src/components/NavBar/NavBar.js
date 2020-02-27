import React, { Component } from 'react';
import "./NavBar.css";
import SideBarButton from './SideBarButton';
import SideBar from '../SideBar/SideBar';
import Backdrop from '../SideBar/Backdrop';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsOnCartList from './ProductsOnCartList';
import classNames from 'classnames';

class NavBar extends Component {
	constructor(props) {
		super(props);
		let isHome = window.location.pathname === "/" ? true : false;
		let isAdmin = window.location.pathname.includes("/admin") ? true : false;
		this.state = {
			isSideBarOpen: false,
			isAdmin,
			isChange: !isHome,
			productsOnCart: JSON.parse(sessionStorage.getItem('productsOnCart')) || [],
			isNewProductAdded: false,
			isCartUpdated: false,
			isAddedListOpened: false,
			totalProductsOnCart: 0
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		const { history } = this.props;
		this.unlisten = history.listen(() => {
			let isHome = window.location.pathname === "/" ? true : false;
			let isAdmin = window.location.pathname.includes("/admin") ? true : false;
			let isChange = isHome ? false : true;
			this.setState({
				isChange,
				isAddedListOpened: false,
				isAdmin
			});
		})
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
		this.unlisten();
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.isNewProductAdded !== prevState.isNewProductAdded) {
			let totalProductsOnCart = 0;
			let isAddedListOpened = false;
			let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart'));
			if (productsOnCart.length > 0) {
				isAddedListOpened = true;
				totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
					return accumulator + current.quantity
				}, 0);
			}
			return {
				isNewProductAdded: nextProps.isNewProductAdded,
				totalProductsOnCart,
				productsOnCart,
				isAddedListOpened
			}
		} else if (nextProps.isCartUpdated !== prevState.isCartUpdated) {
			let productsOnCart = JSON.parse(sessionStorage.getItem('productsOnCart'));
			let totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
				return accumulator + current.quantity
			}, 0);
			return {
				productsOnCart,
				totalProductsOnCart,
				isCartUpdated: nextProps.isCartUpdated
			}
		}
		else {
			return null;
		}
	}

	handleScroll = () => {
		const { history } = this.props;
		if (history.location.pathname === "/") {
			const currentScrollPos = window.scrollY;
			const isChange = currentScrollPos > 0;
			this.setState({
				isChange
			})
		}
	}

	sideBarOpen = () => {
		this.setState(prevState => {
			return { isSideBarOpen: !prevState.isSideBarOpen }
		})
	}

	backdropClickHandler = () => {
		this.setState({ isSideBarOpen: false })
	}
	render() {
		const { isChange, isSideBarOpen, productsOnCart, isAddedListOpened, isAdmin } = this.state;
		let totalProductsOnCart = productsOnCart.reduce((accumulator, current) => {
			return accumulator + current.quantity
		}, 0);
		let backdrop;
		if (this.state.isSideBarOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />
		}
		return (
			<div
				// style={{ display: "none" }}
				// className="fixed-top"
				className={classNames("fixed-top", { disable: isAdmin})}
			>
				<nav className={isChange ? 'navbar navbar-expand-lg navbar-dark  navbar-shrink' : 'navbar navbar-expand-lg navbar-dark'} id="mainNav">
					<div className="container-fluid d-flex ">
						<div className="flex-grow-1" style={{ maxWidth: "30%", zIndex: 2 }}>
							<SideBarButton changeSideBarState={this.sideBarOpen} />
							<button className="toggle-button" style={{ display: "none" }}>
								<div className="toggle-button__line" style={{ transform: "rotate(45deg)", marginTop: "16px", marginBottom: "-2px" }} />
								<div className="toggle-button__line" style={{ transform: "rotate(135deg)", marginBottom: "16px" }} />
							</button>
						</div>
						<div className="flex-grow-1 d-flex justify-content-center" >
							<Link className=" navbar-brand js-scroll-trigger" to="/">TailorWings</Link>
						</div>
						<div className="flex-grow-1" style={{ maxWidth: "30%" }}>
							<ul className="nav navbar-nav d-flex flex-row flex-nowrap justify-content-around">
								<li className="nav-item flex-grow-1" style={{ paddingRight: "10px" }} >
									<div className={classNames("nav-link d-flex justify-content-end small-cart", { open: isAddedListOpened })}>
										<div className="badge-contain">
											<Link to="/shopping-cart" className=" fas fa-shopping-bag fa-lg"></Link>
											<span className="badge badge-info badge-pill">{totalProductsOnCart}</span>
										</div>
										<div className="list">
											<div className="card text-center mt-3" style={{ border: "none", boxShadow: "3px 2px 10px -1px rgba(0,0,0,0.75)" }}>
												<div className="card-body scroll" style={{ padding: 15 }} >
													{productsOnCart.map((product, index) => {
														return <ProductsOnCartList key={index} {...product} />
													})}
												</div>
												<div className="card-footer text-muted d-flex justify-content-between">
													<Link
														to="/shopping-cart"
														style={{ color: "white" }}>
														<button className="btn btn-primary" >
															Giỏ Hàng
														</button>
													</Link>
													<div className="d-flex flex-column justify-content-center">
														<i onClick={() => this.setState({ isAddedListOpened: false })} className="fas fa-times" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item flex-grow-2" ><a className="nav-link" ><i className=" fas fa-search fa-lg"></i></a></li>
							</ul>
						</div>
					</div>
				</nav>
				<SideBar show={isSideBarOpen} changeSideBarState={this.sideBarOpen} history={this.props.history} />
				{backdrop}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isNewProductAdded: state.listProductOnCart,
		isCartUpdated: state.updateProductOnCart
	}
}

export default connect(mapStateToProps, null)(NavBar);


