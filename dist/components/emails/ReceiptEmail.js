"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptEmailHtml = exports.ReceiptEmail = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../lib/utils");
var components_1 = require("@react-email/components");
var date_fns_1 = require("date-fns");
var ReceiptEmail = function (_a) {
    var email = _a.email, date = _a.date, orderId = _a.orderId, products = _a.products;
    var total = products.reduce(function (acc, curr) { return acc + curr.price; }, 0) + 1;
    return (react_1.default.createElement(components_1.Html, null,
        react_1.default.createElement(components_1.Head, null),
        react_1.default.createElement(components_1.Preview, null, "Your DigitalHippo Receipt"),
        react_1.default.createElement(components_1.Body, { style: main },
            react_1.default.createElement(components_1.Container, { style: container },
                react_1.default.createElement(components_1.Section, null,
                    react_1.default.createElement(components_1.Column, null,
                        react_1.default.createElement(components_1.Img, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/hippo-email-sent.png"), width: '100', height: '100', alt: 'DigitalHippo' })),
                    react_1.default.createElement(components_1.Column, { align: 'right', style: tableCell },
                        react_1.default.createElement(components_1.Text, { style: heading }, "Receipt"))),
                react_1.default.createElement(components_1.Section, { style: informationTable },
                    react_1.default.createElement(components_1.Row, { style: informationTableRow },
                        react_1.default.createElement(components_1.Column, { style: informationTableColumn },
                            react_1.default.createElement(components_1.Text, { style: informationTableLabel }, "EMAIL"),
                            react_1.default.createElement(components_1.Link, { style: __assign({}, informationTableValue) }, email)),
                        react_1.default.createElement(components_1.Column, { style: informationTableColumn },
                            react_1.default.createElement(components_1.Text, { style: informationTableLabel }, "INVOICE DATE"),
                            react_1.default.createElement(components_1.Text, { style: informationTableValue }, (0, date_fns_1.format)(date, 'dd MMM yyyy'))),
                        react_1.default.createElement(components_1.Column, { style: informationTableColumn },
                            react_1.default.createElement(components_1.Text, { style: informationTableLabel }, "ORDER ID"),
                            react_1.default.createElement(components_1.Link, { style: __assign({}, informationTableValue) }, orderId)))),
                react_1.default.createElement(components_1.Section, { style: productTitleTable },
                    react_1.default.createElement(components_1.Text, { style: productsTitle }, "Order Summary")),
                products.map(function (product) {
                    var _a;
                    var image = product.images[0].image;
                    return (react_1.default.createElement(components_1.Section, { key: product.id },
                        react_1.default.createElement(components_1.Column, { style: { width: '64px' } }, typeof image !== 'string' &&
                            image.url ? (react_1.default.createElement(components_1.Img, { src: image.url, width: '64', height: '64', alt: 'Product Image', style: productIcon })) : null),
                        react_1.default.createElement(components_1.Column, { style: { paddingLeft: '22px' } },
                            react_1.default.createElement(components_1.Text, { style: productTitle }, product.name),
                            product.description ? (react_1.default.createElement(components_1.Text, { style: productDescription }, product.description.length > 50
                                ? ((_a = product.description) === null || _a === void 0 ? void 0 : _a.slice(0, 50)) + '...'
                                : product.description)) : null,
                            react_1.default.createElement(components_1.Link, { href: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/thank-you?orderId=").concat(orderId), style: productLink }, "Download Asset")),
                        react_1.default.createElement(components_1.Column, { style: productPriceWrapper, align: 'right' },
                            react_1.default.createElement(components_1.Text, { style: productPrice }, (0, utils_1.formatPrice)(product.price)))));
                }),
                react_1.default.createElement(components_1.Section, null,
                    react_1.default.createElement(components_1.Column, { style: { width: '64px' } }),
                    react_1.default.createElement(components_1.Column, { style: {
                            paddingLeft: '40px',
                            paddingTop: 20,
                        } },
                        react_1.default.createElement(components_1.Text, { style: productTitle }, "Transaction Fee")),
                    react_1.default.createElement(components_1.Column, { style: productPriceWrapper, align: 'right' },
                        react_1.default.createElement(components_1.Text, { style: productPrice }, (0, utils_1.formatPrice)(1)))),
                react_1.default.createElement(components_1.Hr, { style: productPriceLine }),
                react_1.default.createElement(components_1.Section, { align: 'right' },
                    react_1.default.createElement(components_1.Column, { style: tableCell, align: 'right' },
                        react_1.default.createElement(components_1.Text, { style: productPriceTotal }, "TOTAL")),
                    react_1.default.createElement(components_1.Column, { style: productPriceVerticalLine }),
                    react_1.default.createElement(components_1.Column, { style: productPriceLargeWrapper },
                        react_1.default.createElement(components_1.Text, { style: productPriceLarge }, (0, utils_1.formatPrice)(total)))),
                react_1.default.createElement(components_1.Hr, { style: productPriceLineBottom }),
                react_1.default.createElement(components_1.Text, { style: footerLinksWrapper },
                    react_1.default.createElement(components_1.Link, { href: '#' }, "Account Settings"),
                    " \u2022",
                    ' ',
                    react_1.default.createElement(components_1.Link, { href: '#' }, "Terms of Sale"),
                    " \u2022",
                    ' ',
                    react_1.default.createElement(components_1.Link, { href: '#' }, "Privacy Policy ")),
                react_1.default.createElement(components_1.Text, { style: footerCopyright },
                    "Copyright \u00A9 2024 DigitalHippo Inc. ",
                    react_1.default.createElement("br", null),
                    ' ',
                    react_1.default.createElement(components_1.Link, { href: '#' }, "All rights reserved"))))));
};
exports.ReceiptEmail = ReceiptEmail;
var ReceiptEmailHtml = function (props) {
    return (0, components_1.render)(react_1.default.createElement(exports.ReceiptEmail, __assign({}, props)), {
        pretty: true,
    });
};
exports.ReceiptEmailHtml = ReceiptEmailHtml;
var main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: '#ffffff',
};
var resetText = {
    margin: '0',
    padding: '0',
    lineHeight: 1.4,
};
var container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '660px',
};
var tableCell = { display: 'table-cell' };
var heading = {
    fontSize: '28px',
    fontWeight: '300',
    color: '#888888',
};
var informationTable = {
    borderCollapse: 'collapse',
    borderSpacing: '0px',
    color: 'rgb(51,51,51)',
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: '3px',
    fontSize: '12px',
    marginTop: '12px',
};
var informationTableRow = {
    height: '46px',
};
var informationTableColumn = {
    paddingLeft: '20px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '0px 1px 1px 0px',
    height: '44px',
};
var informationTableLabel = __assign(__assign({}, resetText), { color: 'rgb(102,102,102)', fontSize: '10px' });
var informationTableValue = {
    fontSize: '12px',
    margin: '0',
    padding: '0',
    lineHeight: 1.4,
};
var productTitleTable = __assign(__assign({}, informationTable), { margin: '30px 0 15px 0', height: '24px' });
var productsTitle = {
    background: '#fafafa',
    paddingLeft: '10px',
    fontSize: '14px',
    fontWeight: '500',
    margin: '0',
};
var productIcon = {
    margin: '0 0 0 20px',
    borderRadius: '14px',
    border: '1px solid rgba(128,128,128,0.2)',
};
var productTitle = __assign({ fontSize: '12px', fontWeight: '600' }, resetText);
var productDescription = __assign({ fontSize: '12px', color: 'rgb(102,102,102)' }, resetText);
var productLink = {
    fontSize: '12px',
    color: 'rgb(0,112,201)',
    textDecoration: 'none',
};
var productPriceTotal = {
    margin: '0',
    color: 'rgb(102,102,102)',
    fontSize: '10px',
    fontWeight: '600',
    padding: '0px 30px 0px 0px',
    textAlign: 'right',
};
var productPrice = {
    fontSize: '12px',
    fontWeight: '600',
    margin: '0',
};
var productPriceLarge = {
    margin: '0px 20px 0px 0px',
    fontSize: '16px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    textAlign: 'right',
};
var productPriceWrapper = {
    display: 'table-cell',
    padding: '0px 20px 0px 0px',
    width: '100px',
    verticalAlign: 'top',
};
var productPriceLine = { margin: '30px 0 0 0' };
var productPriceVerticalLine = {
    height: '48px',
    borderLeft: '1px solid',
    borderColor: 'rgb(238,238,238)',
};
var productPriceLargeWrapper = {
    display: 'table-cell',
    width: '90px',
};
var productPriceLineBottom = { margin: '0 0 75px 0' };
var footerLinksWrapper = {
    margin: '8px 0 0 0',
    textAlign: 'center',
    fontSize: '12px',
    color: 'rgb(102,102,102)',
};
var footerCopyright = {
    margin: '25px 0 0 0',
    textAlign: 'center',
    fontSize: '12px',
    color: 'rgb(102,102,102)',
};
