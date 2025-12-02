const _excluded = ["href", "src", "alt"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useContext, useEffect, useState } from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import LogoSlot from '../plugin-slots/LogoSlot';
import CourseInfoSlot from '../plugin-slots/CourseInfoSlot';
import { courseInfoDataShape } from './LearningHeaderCourseInfo';
import messages from './messages';
import getCourseLogoOrg from './data/api';
import LanguageSelector from '../LanguageSelector';
const LinkedLogo = _ref => {
  let {
      href,
      src,
      alt
    } = _ref,
    attributes = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, attributes), /*#__PURE__*/React.createElement("img", {
    className: "d-block",
    src: src,
    alt: alt
  }));
};
LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
const LearningHeader = _ref2 => {
  let {
    courseOrg,
    courseTitle,
    intl,
    showUserDropdown
  } = _ref2;
  const {
    authenticatedUser
  } = useContext(AppContext);
  const [logoOrg, setLogoOrg] = useState(null);
  const enableOrgLogo = getConfig().ENABLE_ORG_LOGO;
  useEffect(() => {
    if (courseOrg && enableOrgLogo) {
      getCourseLogoOrg().then(logoOrgUrl => {
        setLogoOrg(logoOrgUrl);
      });
    }
  }, [courseOrg, enableOrgLogo]);
  const headerLogo = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Responsive, {
    maxWidth: 769
  }, /*#__PURE__*/React.createElement(LogoSlot, {
    href: `${getConfig().LMS_BASE_URL}/dashboard`,
    src: getConfig().LOGO_URL_MOBILE || getConfig().LOGO_URL,
    alt: getConfig().SITE_NAME
  })), /*#__PURE__*/React.createElement(Responsive, {
    minWidth: 769
  }, /*#__PURE__*/React.createElement(LogoSlot, {
    href: `${getConfig().LMS_BASE_URL}/dashboard`,
    src: getConfig().LOGO_URL,
    alt: getConfig().SITE_NAME
  })));
  return /*#__PURE__*/React.createElement("header", {
    className: "learning-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sr-only sr-only-focusable",
    href: "#main-content"
  }, intl.formatMessage(messages.skipNavLink)), /*#__PURE__*/React.createElement("div", {
    className: "container-xl py-2 d-flex align-items-center justify-content-between"
  }, headerLogo, /*#__PURE__*/React.createElement("div", {
    className: "d-none d-md-block flex-grow-1 course-title-lockup"
  }, /*#__PURE__*/React.createElement("div", {
    className: `d-md-flex ${enableOrgLogo && 'align-items-center justify-content-center'} w-100`
  }, enableOrgLogo && courseOrg && logoOrg && /*#__PURE__*/React.createElement("img", {
    src: logoOrg,
    alt: `${courseOrg} logo`,
    style: {
      maxHeight: '3rem',
      maxWidth: '15rem'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "d-inline-block course-title font-weight-semibold ml-3 text-truncate text-left",
    style: {
      fontSize: '1rem'
    }
  }, courseTitle))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, getConfig().ENABLE_HEADER_LANG_SELECTOR && /*#__PURE__*/React.createElement("div", {
    className: "mx-2 d-md-inline-flex"
  }, /*#__PURE__*/React.createElement(Responsive, {
    maxWidth: 1200
  }, /*#__PURE__*/React.createElement(LanguageSelector, {
    options: JSON.parse(getConfig().SITE_SUPPORTED_LANGUAGES),
    compact: true,
    authenticatedUser: authenticatedUser
  })), /*#__PURE__*/React.createElement(Responsive, {
    minWidth: 1200
  }, /*#__PURE__*/React.createElement(LanguageSelector, {
    options: JSON.parse(getConfig().SITE_SUPPORTED_LANGUAGES),
    compact: false,
    authenticatedUser: authenticatedUser
  }))), showUserDropdown && authenticatedUser && /*#__PURE__*/React.createElement(AuthenticatedUserDropdown, {
    username: authenticatedUser.username
  }), showUserDropdown && !authenticatedUser && /*#__PURE__*/React.createElement(AnonymousUserMenu, null))));
};
LearningHeader.propTypes = {
  courseOrg: PropTypes.string,
  courseTitle: PropTypes.string,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool
};
LearningHeader.defaultProps = {
  courseOrg: null,
  courseTitle: null,
  showUserDropdown: true
};
export default injectIntl(LearningHeader);
//# sourceMappingURL=LearningHeader.js.map