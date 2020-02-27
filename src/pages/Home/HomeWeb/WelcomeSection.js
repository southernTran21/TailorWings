import React, { Component } from 'react'
import './WelcomeSection.css';
import classNames from 'classnames';
// import { history } from "../../app/App"
import { Link } from 'react-router-dom'

export const ref = React.createRef();

export default class WelcomeSection extends Component {
	componentDidMount() {
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
	render() {
		return (
			<div>
				<section className="masthead" id="home" ref={ref}>
					<div className="container">
						<div className="intro-text">
							<div className="intro-heading text-uppercase">TỰ DO CHỌN THIẾT KẾ VÀ VẢI CHO CHIẾC ĐẦM CỦA BẠN !</div>
							<Link to="/shopping-store?cat=all" >
								<button
									// onClick={() => history.push('/shopping-store?cat=all')}
									className={classNames("btn btn-outline-orange btn-xl", { move: this.props.isChange })} >
									<p className=" text-uppercase px-0 py-0 my-0">BẮT ĐẦU NGAY</p>
								</button>
							</Link>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
