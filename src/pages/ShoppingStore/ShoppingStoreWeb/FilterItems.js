import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './FilterItems.scss'
import React from 'react'
const { SubMenu } = Menu;

export default class FilterItems extends React.Component {
    state = {
        openCategoryKeys: window.innerWidth > 600 ? ['category'] : [],
        openPriceKeys: window.innerWidth > 600 ? ['price'] : []
    };

    onCategoryOpenChange = openCategoryKeys => {
        this.setState({ openCategoryKeys });
    };

    onPriceOpenChange = openPriceKeys => {
        this.setState({ openPriceKeys });
    };

    render() {
        const { categoriesInfo } = this.props;
        let categories = [];
        if ( categoriesInfo != null ) {
            categories = categoriesInfo;
        }
        return (
            <div id='filter-items-container'>
                <Menu
                    mode="inline"
                    openKeys={this.state.openCategoryKeys}
                    onOpenChange={this.onCategoryOpenChange}
                    style={{ width: "100%" }}
                >
                    <SubMenu
                        key="category"
                        title={
                            <span className="d-flex flex-row flex-nowrap align-content-center">
                                <span className="d-flex flex-column flex-nowrap justify-content-center" >
                                    <Icon type="unordered-list" />
                                </span>
                                <span style={{ fontWeight: "bold", fontSize: "15px" }}>Danh Mục</span>
                            </span>
                        }
                    >
                        {/* {this.props.allCategories.map((category) => { */}
                        {categories.map((category) => {
                            if ( category != null ) {
                                return (
                                    <Menu.Item key={category.id}>
                                        <Link id="link" to={{
                                            pathname: "/shopping-store",
                                            search: "?cat=" + category.id
                                        }}>
                                        {category.name}
                                        </Link>
                                    </Menu.Item>
                                )
                            }
                        })}
                    </SubMenu>

                </Menu>
                <Menu
                    mode="inline"
                    openKeys={this.state.openPriceKeys}
                    onOpenChange={this.onPriceOpenChange}
                    style={{ width: "100%" }}
                >
                    <SubMenu
                        key="price"
                        title={
                            <span className="d-flex flex-row flex-nowrap align-content-center">
                                <span className="d-flex flex-column flex-nowrap justify-content-center" >
                                    <Icon type="dollar" />
                                </span>
                                <span style={{ fontWeight: "bold", fontSize: "15px" }} >Giá</span>
                            </span>
                        }
                    >
                        <Menu.Item key="descending" onClick={() => this.props.sortHandling("descending")} >Cao đến thấp</Menu.Item>
                        <Menu.Item key="ascending" onClick={() => this.props.sortHandling("ascending")}>Thấp đến cao</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}