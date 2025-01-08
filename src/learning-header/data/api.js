import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient, getAuthenticatedUser } from '@edx/frontend-platform/auth';

const getCourseLogoOrg = async () => {
  try {
    const orgId = window.location.pathname.match(/course-(.*?):([^+]+)/)[2];
    const { username } = getAuthenticatedUser();
    if (username) {
      const { data } = await getAuthenticatedHttpClient()
        .get(
          `${getConfig().LMS_BASE_URL}/api/organizations/v0/organizations/${orgId}/`,
          { useCache: true },
        );
      return data.logo;
    }
    return null;
  } catch (error) {
    const { httpErrorStatus } = error && error.customAttributes;
    if (httpErrorStatus === 404) {
      return null;
    }
    throw error;
  }
};

export default getCourseLogoOrg;
