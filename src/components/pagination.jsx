import React, { Component } from "react";
import _ from "lodash";
import propTypes from "prop-types";
class Pagination extends Component {
  render() {
    const { ItemsCount, pageSize, currentPage, handlePagination } = this.props;

    const pagination = Math.ceil(ItemsCount / pageSize);

    console.log("pagination", pagination)

    
    // if (pagination === 1) return null;
    const Pages = _.range(1, pagination + 1);

    return (
      <div>
        <nav>
          <ul className="pagination">
            {Pages.map((page) => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a className="page-link" onClick={() => handlePagination(page)}>
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
Pagination.propTypes = {
  ItemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  handlePagination: propTypes.func.isRequired,
};

export default Pagination;
