import { useState } from "react";
function SideBar() {
  const [activetab, setActivetab] = useState("company-overview");
  const contentVisibility = (tabName) => {
    setActivetab(tabName);
  };
  return (
    <>
      <div className="row d-flex flex-nowrap">
        <div className="col-sm-3">
          <div className="d-flex flex-column flex-shrink-0 p-3 box-shadow sidebar container">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <svg className="bi pe-none me-2" width="40" height="32"></svg>
              <span className="fs-4">Logo Image</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li
                className="nav-item"
                onClick={() => contentVisibility("company-overview")}
              >
                <a
                  href="#"
                  className={`nav-link link-body-emphasis ${
                    activetab === "company-overview" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  <svg class="bi pe-none me-2" width="16" height="16"></svg>
                  Company overview
                </a>
              </li>
              <li onClick={() => contentVisibility("income-statement")}>
                <a
                  href="#"
                  className={`nav-link link-body-emphasis ${
                    activetab === "income-statement" ? "active" : ""
                  }`}
                >
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Income statement
                </a>
              </li>

              <li onClick={() => contentVisibility("balance-sheet")}>
                <a
                  href="#"
                  className={`nav-link link-body-emphasis ${
                    activetab === "balance-sheet" ? "active" : ""
                  }`}
                >
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Balance sheets
                </a>
              </li>
              <li onClick={() => contentVisibility("cash-flow")}>
                <a
                  href="#"
                  className={`nav-link link-body-emphasis ${
                    activetab === "cash-flow" ? "active" : ""
                  }`}
                >
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Cash flow
                </a>
              </li>
              <li onClick={() => contentVisibility("earnings")}>
                <a
                  href="#"
                  className={`nav-link link-body-emphasis ${
                    activetab === "earnings" ? "active" : ""
                  }`}
                >
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Earnings
                </a>
              </li>
              <li onClick={() => contentVisibility("earnings-calender")}>
                <a
                  href="#"
                  className={`nav-link link-body-emphasis ${
                    activetab === "earnings-calender" ? "active" : ""
                  }`}
                >
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Earnings calender
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-8">
          <div className="content-1 d-block m-3">
            {/* <!-- company overview --> */}
            <div
              id="company-overview"
              className={`content ${
                activetab === "company-overview" ? "" : "visually-hidden"
              }`}
            >
              <div className="row">
                <div className="col-sm-12 p-3 main-heading">
                  <h2 className="text-center">Company Overview</h2>
                </div>
              </div>
              <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-lg-8">
                  {/* <!-- search form --> */}
                  <div className="search d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control search_symbol"
                      placeholder="Search for symbols"
                    />
                    <a
                      href="#"
                      className="search_icon search-icon text-white bg-primary justify-content-center"
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row d-flex flex-row around justify-content-center">
                <div className="col-lg-12 card mx-2 py-3" id="overview-details">
                  {/* <!-- card to siaplay data --> */}
                </div>
              </div>
              {/* <!-- search result --> */}
              <div className="row d-flex flex-row around justify-content-center visually-hidden content">
                <div
                  className="col-lg-8 card mx-2 py-3"
                  id="overview-search-result"
                >
                  {/* <!-- card to siaplay data --> */}
                </div>
              </div>
            </div>

            {/* <!-- income statemnet --> */}
            <div
              id="income-statement"
              className={`visually-hidden content ${
                activetab === "income-statement" ? "" : "visually-hidden"
              }`}
            >
              <div class="row">
                <div className="col-lg-12 p-3 mx-3 main-heading">
                  <h2 className="text-center">Income Statement</h2>
                </div>
              </div>
              <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center insert_search"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table
                      className="table .table-sm table-striped"
                      id="income-statement-table"
                    >
                      {/* <!-- Dynamic content will be added here --> */}
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- balance sheet --> */}
            <div
              id="balance-sheets"
              className={`visually-hidden content ${
                activetab === "balance-sheet" ? "" : "visually-hidden"
              }`}
            >
              <div className="row m-auto">
                <div className="col-lg-12 mx-3 p-3 main-heading">
                  <h2 className="text-center">Balance Sheet</h2>
                </div>
              </div>
              <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center insert_search"></div>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-lg-10">
                  <div className="table-responsive">
                    <table
                      className="table table-striped"
                      id="balance-sheet-table"
                    >
                      {/* <!-- Table header will be added dynamically --> */}
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- cash flow --> */}
            <div
              id="cash-flow"
              className={`visually-hidden content ${
                activetab === "cash-flow" ? "" : "visually-hidden"
              }`}
            >
              <div className="row">
                <div className="col-lg-12  mx-3 p-3 main-heading">
                  <h2 className="text-center">Cash Flow</h2>
                </div>
              </div>
              <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center insert_search"></div>
                </div>
              </div>
            </div>
            {/* <!-- earnings --> */}
            <div
              id="earnings"
              className={`visually-hidden content ${
                activetab === "earnings" ? "" : "visually-hidden"
              }`}
            >
              <div className="row">
                <div className="col-lg-12  p-3 main-heading">
                  <h2 className="text-center">Earnings</h2>
                </div>
              </div>
              <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-lg-8">
                  <div
                    className="d-flex align-items-center insert_search"
                    id="search"
                  ></div>
                </div>
              </div>
            </div>
            <div
              id="earnings-calender"
              className={`visually-hidden content ${
                activetab === "earnings-calender" ? "" : "visually-hidden"
              }`}
            >
              <div class="row">
                <div class="col-lg-12 bg-white mx-3 p-3 main-heading">
                  <h2 class="text-center">Earning Calender</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
