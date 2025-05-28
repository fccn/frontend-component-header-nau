import messages from './messages';

const getUserMenuItems = ({
  studioBaseUrl,
  logoutUrl,
  intl,
  isAdmin,
  gammaSettingsUrl,
}) => {
  let items = [
    {
      href: `${studioBaseUrl}`,
      title: intl.formatMessage(messages['header.user.menu.studio']),
    }, {
      href: `${logoutUrl}`,
      title: intl.formatMessage(messages['header.user.menu.logout']),
    },
  ];
  if (isAdmin) {
    items = [
      {
        href: `${studioBaseUrl}`,
        title: intl.formatMessage(messages['header.user.menu.studio']),
      }, {
        href: `${studioBaseUrl}/maintenance`,
        title: intl.formatMessage(messages['header.user.menu.maintenance']),
      },
    ];

    if (gammaSettingsUrl) {
      items.push({
        href: `${gammaSettingsUrl}`,
        title: intl.formatMessage(messages['header.user.menu.gamification-settings']),
      });
    }

    items.push({
      href: `${logoutUrl}`,
      title: intl.formatMessage(messages['header.user.menu.logout']),
    });
  }

  return items;
};

export default getUserMenuItems;
